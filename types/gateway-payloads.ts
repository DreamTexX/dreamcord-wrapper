// deno-lint-ignore-file camelcase

// https://discord.com/developers/docs/topics/gateway#hello-hello-structure
export interface GatewayHello {
  heartbeat_interval: number;
}
