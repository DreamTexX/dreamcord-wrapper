> **This wrapper is not nearly finished and contains bugs and missing features**

# Dreamcord Wrapper

## About

This project is a simple wrapper for the discord api and the gateway. There are no special functions like `Channel#send` as it only provides the typings for api responses and requests. The wrapper class itself provides just two methods: `Wrapper#on(EventType, Callback<GatewayEventData>)` and `Wrapper#do<ResponseType>(HttpMethod, Url, RequestPayload)`.
A fully featured library is planned for the future.

## Features

- [X] Implementing all discord responses and payloads as interfaces for typings (I think we are done with it, if something is missing tell us)
- [X] Creating and resuming sessions
- [X] Keeping gateway connection alive
- [X] (Maybe done) Handle each opcode correctly
- [] Handle rate limits
- [] Intent options in wrapper initialize
- [] Sharding

## Contributing

Just go ahead if you wanna do something, but remember this is just a wrapper. No fancy stuff in here

## Usage

Do not use it. Use the fully features lib.

```ts
import { Wrapper } from "https://raw.githubusercontent.com/dreamtexx/dreamcord-wrapper/master/mod.ts";

const wrapper = new Wrapper("Your token here");
wrapper.on(EventType.MESSAGE_CREATE, async (message) => {
  if (message.author?.bot) return;
  if (message.content.startsWith("!hello")) {
    await wrapper.do<Message>(
      "post",
      `/channels/${message.channel_id}/messages`,
      {
        embed: {
          title: "Hello!",
          description: "Whats up?",
        },
      } as CreateMessagePayload
    );
  }
});
