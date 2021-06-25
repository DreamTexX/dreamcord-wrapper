// deno-lint-ignore-file camelcase

import * as Types from "./types.ts";
import * as Enums from "./enums.ts";

// https://discord.com/developers/docs/resources/channel#modify-channel
interface ModifyChannelBase {
    name: string;
}

interface ModifyChannelGroupDM extends ModifyChannelBase {
    icon: string;
    type: Enums.ChannelType.GROUP_DM;
}

/** interface ModifyChannelGuild {} @Morazzer */

// https://discord.com/developers/docs/interactions/slash-commands#interaction-response-interactionapplicationcommandcallbackdata
export interface InteractionApplicationCommandCallbackData {
  tts?: boolean,
  content?: string,
  embeds?: Types.Embed[],
  allowed_mentions?: Types.AllowedMentions,
  flags?: Enums.InteractionFlag,
  components: Types.MessageComponentActionRow[];
}

// https://discord.com/developers/docs/interactions/slash-commands#interaction-response
export interface InteractionResponsePayload {
  type: Enums.InteractionCallbackType
  data: InteractionApplicationCommandCallbackData;
}


// https://discord.com/developers/docs/resources/channel#create-message
export interface CreateMessagePayload {
  file: string;
  content: string;
  embed: Types.Embed;
  tts?: boolean;
  allowed_mentions?: Types.AllowedMentions;
  message_reference?: Types.MessageReference;
  components?: Types.MessageComponentActionRow[];
}