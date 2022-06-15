import { Gateway, GatewayEventDataByEvent, EventType, Intent, Opcode } from "./types/index.ts";

export interface Callback<T extends EventType> {
  (data: GatewayEventDataByEvent<T>): void | Promise<void>;
}

export class Wrapper {
  private waitingForHeartbeatAck = false;
  private lastSequenceNumber: number | null = null;
  private sessionId!: string;
  private isResuming = false;
  private ws!: WebSocket;
  // deno-lint-ignore no-explicit-any
  private eventHandlers: Map<EventType, Map<number, Callback<any>>> = new Map();
  
  constructor(private token: string) {
    //this.connect();
  }

  public on<T extends EventType>(event: T, callback: Callback<T>) {
    let map = this.eventHandlers.get(event);
    if (!map) map = new Map<number, Callback<T>>();
    const index = (Array.from(map.keys())[map.size - 1] || 0) + 1;
    map.set(index, callback);
    this.eventHandlers.set(event, map);
  }

  public async do<T>(
    method: "post" | "get" | "patch" | "delete",
    url: string,
    payload?: unknown
  ): Promise<T | undefined> {
    if (!this.sessionId)
      throw new Error('Cannot do something, while not connected to gateway')

    try {
      const response = await fetch("https://discord.com/api/v9" + url, {
        method: method.toUpperCase(),
        headers: {
          Authorization: "Bot " + this.token,
          'content-type': 'application/json',
        },
        body: method != "get" ? JSON.stringify(payload) : undefined
      });
      
      let data = undefined;
      try {
        data = await response.json();
      } catch (_) {
        // Ignore
      }
      if (response.status === 200) {
        return data as T;
      }
      if (response.status === 429) {
        //ToDo: ToDo
      }
      console.log(response.status, JSON.stringify(data, null, 4));
      // TODO: Queue message if ratelimit
    } catch (err) {
      console.log(err);
    }
    return undefined;
  }

  connect() {
    this.ws = new WebSocket("wss://gateway.discord.gg?v=9&encoding=json");
    this.ws.onopen = () => {
      console.log("Client connected");
    };
    this.ws.onclose = (event) => {
      console.log("Client disconnected", event);
      this.connect();
    };
    this.ws.onmessage = async (message) => {
      const payload: Gateway = JSON.parse(message.data);
      console.log(JSON.stringify(payload, null, 2));

      if (payload.op === Opcode.HELLO) {
        // -- HEARTBEAT --
        setInterval(() => {
          if (this.waitingForHeartbeatAck) {
            this.ws.close(99);
          }
          this.ws.send(
            JSON.stringify({
              op: Opcode.HEARTBEAT,
              d: this.lastSequenceNumber,
            })
          );
          this.waitingForHeartbeatAck = true;
        }, payload.d.heartbeat_interval);

        if (!this.sessionId) this.login();
        else {
          this.ws.send(
            JSON.stringify({
              op: Opcode.RESUME,
              d: {
                token: this.token,
                session_id: this.sessionId,
                seq: this.lastSequenceNumber,
              },
            })
          );
          this.isResuming = true;
        }
      }
      if (payload.op === Opcode.HEARTBEAT) {
        if (this.waitingForHeartbeatAck) {
          this.ws.close(99);
        }
        this.ws.send(
          JSON.stringify({
            op: Opcode.HEARTBEAT,
            d: this.lastSequenceNumber,
          })
        );
        this.waitingForHeartbeatAck = true;
      }
      if (payload.op === Opcode.HEARTBEAT_ACK) {
        this.waitingForHeartbeatAck = false;
      }

      if (payload.op === Opcode.INVALID_SESSION) {
        if (!this.isResuming && payload.d === true) {
          // TRY RESUMING
        } else {
          // RECONNECT WITH OP 2
        }
      }

      if (payload.s) {
        this.lastSequenceNumber = payload.s;
      }

      if (payload.op === Opcode.DISPATCH) {
        if (this.eventHandlers.get(payload.t))
          for (const [_, eventHandler] of this.eventHandlers.get(payload.t) ||
            []) {
            await eventHandler(payload.d);
          }
        if (payload.t === EventType.RESUMED) {
          this.isResuming = false;
        }
        if (payload.t === EventType.READY) {
          this.sessionId = payload.d.session_id;
        }
      }
    };
  }
  
  private login(): void {
    this.ws.send(
      JSON.stringify({
        op: Opcode.IDENTIFY,
        d: {
          token: this.token,
          intents: Intent.ALL,
          properties: {},
        },
      })
    );
  }
}
