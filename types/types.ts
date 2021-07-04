// deno-lint-ignore-file camelcase

/**
 * @Morazzer
 *
 * import * as !MEHRZAHL!
 *
 */
import * as GatewayPayloads from "./gateway-payloads.ts";
import * as GatewayEventPayloads from "./gateway-event-payloads.ts";
import * as Enums from "./enums.ts";

// https://discord.com/developers/docs/resources/user#user-object-user-structure
export interface User {
  id: string;
  username: string;
  discriminator: string;
  avatar: string;
  bot?: boolean;
  system?: boolean;
  mfa_enabled?: boolean;
  locale?: string;
  verified?: boolean;
  email?: string;
  flags: number;
  premium_type?: number;
  public_flags?: number;
}

// https://discord.com/developers/docs/topics/teams#data-models-team-members-object
export interface TeamMember {
  // 1 - Invited
  // 2 - Accepted
  membership_state: Enums.TeamMembershipState;
  permission: string[];
  team_id: string;
  user: Partial<User>;
}

// https://discord.com/developers/docs/topics/teams#data-models-team-object
export interface Team {
  icon?: string;
  id: string;
  members: TeamMember[];
}

// https://discord.com/developers/docs/resources/application#application-object
export interface Application {
  id: string;
  name: string;
  icon?: string;
  description: string;
  rpc_origins: string[];
  bot_public: boolean;
  bot_require_code_grant: boolean;
  terms_of_service_url?: boolean;
  privacy_policy_url?: string;
  owner: Partial<User>;
  summary: string;
  verify_key: string;
  team: Team;
  cover_image?: string;
  flags: number;
}

// https://discord.com/developers/docs/resources/guild#unavailable-guild-object-example-unavailable-guild
export interface UnavailableGuild {
  id: string;
  unavailable?: boolean;
}

// https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure
export interface SelectMenu {
  custom_id: string,
  options: SelectOption[],
  placeholder?: string,
  min_values?: number,
  max_values?: number
}

// https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure
export interface SelectOption {
  label: string,
  value: string,
  description?: string,
  emoji?: Partial<Emoji>,
  default?: boolean
}

// https://discord.com/developers/docs/resources/guild#guild-object
export interface Guild {
  id: string;
  name: string;
  icon?: string;
  icon_hash?: string;
  splash?: string;
  discovery_splash?: string;
  owner?: boolean;
  owner_id: string;
  permissions?: string;
  region: string;
  afk_channel_id?: string;
  afk_timeout: number;
  widget_enabled?: boolean;
  widget_channel_id?: string;
  verification_level: Enums.VerificationLevel;
  default_message_notifications: Enums.DefaultMessageNotifications;
  explicit_content_filter: Enums.ExplicitContentFilterLevel;
  roles: Role[];
  emojis: Emoji[];
  features: Enums.GuildFeature[];
  mfa_level: Enums.MfaLevel;
  application_id: string;
  system_channel_id: string;
  system_channel_flag: Enums.SystemChannelFlag;
  rules_channel_id: string;
  joined_at?: Date;
  large?: boolean;
  unavailable?: boolean;
  member_count?: number;
  voice_states?: Partial<VoiceState>[];
  members?: GuildMember[];
  channels?: Channel[];
  thread?: Channel[];
  presences?: Partial<PresenceObject>[];
  max_presences?: number;
  max_members?: number;
  vanity_url_code?: string;
  description?: string;
  banner?: string;
  premium_tier?: Enums.PremiumTier;
  premium_subscription_count?: number;
  preferred_locale: string;
  public_updates_channel_id?: string;
  max_video_channel_users?: number;
  approximate_member_count?: number;
  approximate_presence_count?: number;
  welcome_screen?: WelcomeScreen;
  nsfw_level: Enums.NsfwLevel;
  stage_instances?: StageInstance;
}

// https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-stage-instance-structure
export interface StageInstance {
  id: string;
  guild_id: string;
  channel_id: string;
  topic: string;
  privacy_level: Enums.PrivacyLevel;
  discoverable_disabled: boolean;
}

// https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-structure
export interface WelcomeScreen {
  description: string;
  welcome_channels: WelcomeScreenChannel[];
}

// https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-channel-structure
export interface WelcomeScreenChannel {
  channel_id: string;
  description: string;
  emoji_id?: string;
  emoji_name?: string;
}

// https://discord.com/developers/docs/topics/gateway#presence-update-presence-update-event-fields
export interface PresenceObject {
  user: User;
  guild_id: string;
  status: string;
  activities: Activity[];
}

// https://discord.com/developers/docs/topics/gateway#client-status-object
export interface ClientStatus {
  desktop?: string;
  mobile?: string;
  web?: string;
}

// https://discord.com/developers/docs/topics/gateway#activity-object-activity-structure
export interface Activity {
  name: string;
  type: Enums.ActivityType;
  url?: string;
  created_at: number;
  timestamps?: ActivityTimestamps;
  application_id?: string;
  details?: string;
  state?: string;
  emoji?: Emoji;
  party?: Party;
  assets?: ActivityAssets;
  secretes?: ActivitySecrets;
  instance?: boolean;
  flags?: Enums.ActivityFlag;
  buttons?: ActivityButton[];
}

// https://discord.com/developers/docs/topics/gateway#activity-object-activity-buttons
export interface ActivityButton {
  label: string;
  url: string;
}

// https://discord.com/developers/docs/topics/gateway#activity-object-activity-assets
export interface ActivityAssets {
  large_image?: string;
  large_text?: string;
  small_image?: string;
  small_text?: string;
}

// https://discord.com/developers/docs/topics/gateway#activity-object-activity-secrets
export interface ActivitySecrets {
  join?: string;
  spectate?: string;
  match?: string;
}

// https://discord.com/developers/docs/topics/gateway#activity-object-activity-party
export interface Party {
  id?: string;
  size?: [number, number];
}

// https://discord.com/developers/docs/topics/gateway#activity-object-activity-timestamps
export interface ActivityTimestamps {
  start?: number;
  end?: number;
}

// https://discord.com/developers/docs/resources/channel#attachment-object
export interface Attachement {
  id: string;
  filename: string;
  content_type?: string;
  size: number;
  url: string;
  proxy_url: string;
  height?: number;
  width?: number;
}

// https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure
export interface EmbedFooter {
  text: string;
  icon_url?: string;
  proxy_icon_url?: string;
}

// https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure
export interface EmbedImage {
  url?: string;
  proxy_url?: string;
  height?: number;
  width?: number;
}

// https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure
export interface EmbedThumbnail {
  url?: string;
  proxy_url?: string;
  heigth?: string;
  width?: string;
}

// https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure
export interface EmbedVideo {
  url?: string;
  proxy_url?: string;
  heigth?: string;
  width?: string;
}

// https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure
export interface EmbedProvider {
  name?: string;
  url?: string;
}

// https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure
export interface EmbedAuthor {
  name?: string;
  url?: string;
  icon_url?: string;
  proxy_icon_url?: string;
}

// https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure
export interface EmbedField {
  name: string;
  value: string;
  inline?: boolean;
}

// https://discord.com/developers/docs/resources/channel#embed-object
export interface Embed {
  title?: string;
  type?: string;
  description?: string;
  url?: string;
  timestamp?: string;
  color?: number;
  footer?: EmbedFooter;
  image?: EmbedImage;
  video?: EmbedVideo;
  provider?: EmbedProvider;
  author?: EmbedAuthor;
  fields?: EmbedField[];
}

// https://discord.com/developers/docs/resources/channel#reaction-object
export interface Reaction {
  count: number;
  me: boolean;
  emoji: Partial<Emoji>;
}

// https://discord.com/developers/docs/resources/channel#message-object-message-activity-structure
export interface MessageActivity {
  type: number;
  party_id?: string;
}

// https://discord.com/developers/docs/resources/channel#message-reference-object-message-reference-structure
export interface MessageReference {
  message_id?: string;
  channel_id?: string;
  guild_id?: string;
  fail_if_not_exists?: boolean;
}

// https://discord.com/developers/docs/resources/channel#message-object-message-sticker-structure
export interface MessageSticker {
  id: string;
  pack_id: string;
  name: string;
  description: string;
  tags?: string;
  asset?: string;
  format_type: number;
}

// https://discord.com/developers/docs/interactions/slash-commands#messageinteraction
export interface MessageInteraction {
  id: string;
  type: Enums.InteractionType;
  name: string;
  user: User;
}

// https://discord.com/developers/docs/interactions/message-components#component-object
interface MessageComponentBase {
  type: Enums.ComponentType;
}

interface MessageComponentButton extends MessageComponentBase {
  type: Enums.ComponentType.BUTTON;
  style: number;
  label: string;
  emoji?: Partial<Emoji>;
  custom_id?: string;
  url?: string;
  disabled?: boolean;
}

export interface MessageComponentActionRow extends MessageComponentBase {
  type: Enums.ComponentType.ACTION_ROW;
  components: MessageComponentButton[];
}

export type MessageComponent =
  | MessageComponentActionRow
  | MessageComponentButton;

// https://discord.com/developers/docs/resources/channel#message-object
export interface Message {
  id: string;
  channel_id: string;
  guild_id?: string;
  author?: User;
  member?: Partial<GuildMember>;
  content: string;
  timestamp: string;
  edited_timestamp: string;
  tts: boolean;
  mention_everyone: boolean;
  mentions: (User & { member: Partial<GuildMember> })[];
  mention_roles: Role[];
  mention_channels: Channel[];
  attachements: Attachement[];
  embeds: Embed[];
  reactions?: Reaction[];
  nonce?: string | number;
  pinned: boolean;
  webhook_id?: string;
  type: Enums.MessageType;
  activity?: MessageActivity;
  application?: Application;
  application_id?: string;
  message_reference?: MessageReference;
  flags?: number;
  stickers?: MessageSticker[];
  referenced_message?: Message;
  interaction?: MessageInteraction;
  thread?: Channel;
  components?: MessageComponent[];
}

// https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
export interface Channel {
  id: string;
  type: Enums.ChannelType;
  guild_id?: string;
  position?: number;
  permission_overwrites?: Enums.PermissionOverwriteType[];
  name?: string;
  topic?: string;
  nsfw?: boolean;
  last_message_id?: string;
  bitrate?: number;
  user_limit?: number;
  rate_limit_per_user?: number;
  recipients?: User[];
  icon?: string;
  owner_id?: string;
  application_id?: string;
  parent_id?: string;
  last_pin_timestamp?: Date;
  rtc_region?: string;
  video_quality_mode?: number;
  message_count?: number;
  member_count?: number;
  thread_metadata?: ThreadMetadata;
  member?: ThreadMember;
}

// https://discord.com/developers/docs/resources/channel#thread-metadata-object-thread-metadata-structure
export interface ThreadMetadata {
  archived: boolean;
  archiver_id?: string;
  auto_archive_duration: number;
  archive_timestamp: Date;
  locked?: boolean;
}

// https://discord.com/developers/docs/resources/channel#thread-member-object-thread-member-structure
export interface ThreadMember {
  id: string;
  user_id: string;
  join_timestamp: Date;
  flags: number;
}

// https://discord.com/developers/docs/resources/channel#overwrite-object-overwrite-structure
export interface PermissionOverwrite {
  id: string;
  type: Enums.PermissionOverwriteType;
  allow: string;
  deny: string;
}

// https://discord.com/developers/docs/resources/voice#voice-state-object-voice-state-structure
export interface VoiceState {
  guild_id?: string;
  channel_id?: string;
  user_id: string;
  member?: GuildMember;
  session_id: string;
  deaf: boolean;
  mute: boolean;
  self_deaf: boolean;
  self_mute: boolean;
  self_stream?: boolean;
  self_video: boolean;
  suppress: boolean;
  request_to_speak_timestamp?: Date;
}

// https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure
export interface GuildMember {
  user?: Partial<User>;
  nick?: string;
  roles: string[];
  joined_at: Date;
  premium_since?: Date;
  deaf: boolean;
  mute: boolean;
  pending?: boolean;
  permissions?: string;
}

// https://discord.com/developers/docs/topics/permissions#role-object-role-structure
export interface Role {
  id: string;
  name: string;
  color: number;
  hoist: boolean;
  position: number;
  permissions: string;
  managed: boolean;
  mentionable: boolean;
  tags?: Partial<RoleTags>;
}

// https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure
export interface RoleTags {
  bot_id?: string;
  integration_id?: string;
  premium_subscriber?: string;
}

// https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
export interface Emoji {
  id?: string;
  name?: string;
  roles?: Role[];
  user?: User;
  require_colons?: boolean;
  managed?: boolean;
  animated?: boolean;
  available?: boolean;
}

// https://discord.com/developers/docs/interactions/slash-commands#applicationcommand
export interface ApplicationCommand {
  id: string;
  application_id: string;
  name: string;
  description: string;
  options?: ApplicationCommandOption[];
  default_permission?: boolean; // default = true
}

// https://discord.com/developers/docs/interactions/slash-commands#applicationcommandoption
export interface ApplicationCommandOption {
  type: Enums.ApplicationCommandOptionType;
  name: string;
  description: string;
  required?: boolean;
  choices?: ApplicationCommandOptionChoice[];
  options?: ApplicationCommandOption[];
}

export interface ApplicationCommandOptionChoice {
  name: string;
  value: string | number;
}

// https://discord.com/developers/docs/resources/guild#integration-object-integration-structure
export interface Integration {
  id: string;
  name: string;
  type: string;
  enabled: boolean;
  syncing?: boolean;
  role_id?: string;
  enable_emoticons: boolean;
  expire_behavior?: Enums.IntegrationExpireBehavior;
  expire_grace_period?: number;
  user?: User;
  account: Account;
  synced_at?: string;
  subscriber_count?: number;
  revoked?: boolean;
  application: Application;
}

// https://discord.com/developers/docs/resources/guild#integration-application-object-integration-application-structure
export interface Application {
  id: string;
  name: string;
  icon?: string;
  description: string;
  summary: string;
  bot?: User;
}

// https://discord.com/developers/docs/resources/guild#integration-account-object-integration-account-structure
export interface Account {
  id: string;
  name: string;
}

// https://discord.com/developers/docs/interactions/slash-commands#interaction
export interface Interaction {
  id: string;
  application_id: string;
  type: Enums.InteractionType;
  data: ApplicationCommandInteractionData;
  guild_id: string;
  channel_id: string;
  member: GuildMember;
  user: User;
  token: string;
  version: number;
  message: Message;
}

// https://discord.com/developers/docs/interactions/slash-commands#interaction-applicationcommandinteractiondata
export interface ApplicationCommandInteractionData {
  id: string;
  name: string;
  resolved?: ApplicationCommandInteractionDataResolved;
  options: ApplicationCommandInteractionDataOption[];
  custom_id: string;
  component_type: Enums.ComponentType;
}

// https://discord.com/developers/docs/interactions/slash-commands#interaction-applicationcommandinteractiondataresolved
export interface ApplicationCommandInteractionDataResolved {
  users?: Map<string, Partial<User>>;
  members?: Map<string, Partial<GuildMember>>;
  roles?: Map<string, Role>;
  channels?: Map<string, Partial<Channel>>;
}

// https://discord.com/developers/docs/interactions/slash-commands#interaction-applicationcommandinteractiondataoption
export interface ApplicationCommandInteractionDataOption {
  name: string;
  type: Enums.ApplicationCommandOptionType;
  value?: unknown;
  options?: ApplicationCommandInteractionDataOption[];
}

// https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure
export interface VoiceRegions {
  id: string;
  name: string;
  vip: boolean;
  optimal: boolean;
  deprecated: boolean;
  custom: boolean;
}

// https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mentions-structure
export interface AllowedMentions {
  parse: Enums.AllowedMention[];
  roles?: string[];
  users?: string[];
  replied_user?: boolean;
}

// ------------------------- Gateway Events -------------------------

// https://discord.com/developers/docs/topics/gateway#payloads-gateway-payload-structure
interface GatewayBase<OP extends Enums.Opcode, D = undefined> {
  op: OP;
  s?: number;
  t?: unknown;
  d: D;
}

export interface GatewayEventBase<T extends Enums.EventType, D = unknown>
  extends GatewayBase<Enums.Opcode.DISPATCH, D> {
  s: number;
  t: T;
  d: D;
}

// deno-lint-ignore no-unused-vars
class GatewayEventDataMapping {
  [Enums.EventType.READY]: GatewayEventPayloads.GatewayEventReady;
  [Enums.EventType.GUILD_CREATE]: Guild;
  [Enums.EventType.APPLICATION_COMMAND_CREATE]: ApplicationCommand & {
    guild_id?: string;
  };
  [Enums.EventType.APPLICATION_COMMAND_UPDATE]: ApplicationCommand & {
    guild_id?: string;
  };
  [Enums.EventType.APPLICATION_COMMAND_DELETE]: ApplicationCommand & {
    guild_id?: string;
  };
  [Enums.EventType.CHANNEL_CREATE]: Channel;
  [Enums.EventType.CHANNEL_UPDATE]: Channel;
  [Enums.EventType.CHANNEL_DELETE]: Channel;
  [Enums.EventType
    .CHANNEL_PINS_UPDATE]: GatewayEventPayloads.GatewayEventChannelPinsUpdate;
  [Enums.EventType.THREAD_CREATE]: Channel;
  [Enums.EventType.THREAD_UPDATE]: Channel;
  [Enums.EventType.THREAD_DELETE]: Channel;
  [Enums.EventType
    .THREAD_LIST_SYNC]: GatewayEventPayloads.GatewayEventThreadListSync;
  [Enums.EventType.THREAD_MEMBER_UPDATE]: ThreadMember;
  [Enums.EventType
    .THREAD_MEMBERS_UPDATE]: GatewayEventPayloads.GatewayEventThreadMembersUpdate;
  [Enums.EventType.GUILD_BAN_ADD]: GatewayEventPayloads.GatewayEventGuildBanAdd;
  [Enums.EventType
    .GUILD_BAN_REMOVE]: GatewayEventPayloads.GatewayEventGuildBanRemove;
  [Enums.EventType
    .GUILD_EMOJIS_UPDATE]: GatewayEventPayloads.GatewayEventGuildEmojisUpdate;
  [Enums.EventType
    .GUILD_INTEGRATIONS_UPDATE]: GatewayEventPayloads.GatewayEventGuildIntegrationsUpdate;
  [Enums.EventType.GUILD_MEMBER_ADD]: GuildMember & { guild_id: string };
  [Enums.EventType
    .GUILD_MEMBER_REMOVE]: GatewayEventPayloads.GatewayEventGuildMemberRemove;
  [Enums.EventType
    .GUILD_MEMBER_UPDATE]: GatewayEventPayloads.GatewayEventGuildMemberUpdate;
  [Enums.EventType
    .GUILD_MEMBERS_CHUNK]: GatewayEventPayloads.GatewayEventGuildMembersChunk;
  [Enums.EventType
    .GUILD_ROLE_CREATE]: GatewayEventPayloads.GatewayEventGuildRoleCreate;
  [Enums.EventType
    .GUILD_ROLE_UPDATE]: GatewayEventPayloads.GatewayEventGuildRoleUpdate;
  [Enums.EventType
    .GUILD_ROLE_DELETE]: GatewayEventPayloads.GatewayEventGuildRoleDelete;
  [Enums.EventType.INTEGRATION_CREATE]: Integration & { guild_id: string };
  [Enums.EventType
    .INTEGRATION_DELETE]: GatewayEventPayloads.GatewayEventIntegrationDelete;
  [Enums.EventType.INTERACTION_CREATE]: Interaction;
  [Enums.EventType.INVITE_CREATE]: GatewayEventPayloads.GatewayEventInviteCreate;
  [Enums.EventType.INVITE_DELETE]: GatewayEventPayloads.GatewayEventInviteDelete;
  [Enums.EventType.MESSAGE_CREATE]: Message;
  [Enums.EventType.MESSAGE_UPDATE]: Message;
  [Enums.EventType.MESSAGE_DELETE]: GatewayEventPayloads.GatewayEventMessageDelete;
  [Enums.EventType
    .MESSAGE_DELETE_BULK]: GatewayEventPayloads.GatewayEventMessageDeleteBulk;
  [Enums.EventType
    .MESSAGE_REACTION_ADD]: GatewayEventPayloads.GatewayEventReactionAdd;
  [Enums.EventType
    .MESSAGE_REACTION_REMOVE]: GatewayEventPayloads.GatewayEventMessageRemove;
  [Enums.EventType
    .MESSAGE_REACTION_REMOVE_ALL]: GatewayEventPayloads.GatewayEventMessageReactionRemoveAll;
  [Enums.EventType
    .MESSAGE_REACTION_REMOVE_EMOJI]: GatewayEventPayloads.GatewayEventMessageReactionRemoveEmoji;
  [Enums.EventType
    .PRESENCE_UPDATE]: GatewayEventPayloads.GatewayEventPresenceUpdate;
  [Enums.EventType.TYPING_START]: GatewayEventPayloads.GatewayEventTypingStart;
  [Enums.EventType.USER_UPDATE]: User;
  [Enums.EventType
    .VOICE_STATE_UPDATE]: GatewayEventPayloads.GatewayEventVoiceStateUpdate;
  [Enums.EventType
    .VOICE_SERVER_UPDATE]: GatewayEventPayloads.GatewayEventVoiceServerUpdate;
  [Enums.EventType.WEBHOOKS_UPDATE]: GatewayEventPayloads.GatewayEventWebhookUpdate;
}

export type GatewayEventDataByEvent<T extends Enums.EventType> =
  (GatewayEventDataMapping & { [key: string]: unknown })[T];

// https://discord.com/developers/docs/topics/gateway#commands-and-events
export type GatewayEvent =
  | GatewayEventBase<Enums.EventType.READY, GatewayEventPayloads.GatewayEventReady>
  | GatewayEventBase<Enums.EventType.RESUMED, undefined>
  | GatewayEventBase<
      | Enums.EventType.APPLICATION_COMMAND_CREATE
      | Enums.EventType.APPLICATION_COMMAND_UPDATE
      | Enums.EventType.APPLICATION_COMMAND_DELETE,
      ApplicationCommand & { guild_id?: string }
    >
  | GatewayEventBase<
      | Enums.EventType.CHANNEL_CREATE
      | Enums.EventType.CHANNEL_UPDATE
      | Enums.EventType.CHANNEL_DELETE,
      Channel
    >
  | GatewayEventBase<
      Enums.EventType.CHANNEL_PINS_UPDATE,
      GatewayEventPayloads.GatewayEventChannelPinsUpdate
    >
  | GatewayEventBase<
      | Enums.EventType.THREAD_CREATE
      | Enums.EventType.THREAD_UPDATE
      | Enums.EventType.THREAD_DELETE,
      Channel
    >
  | GatewayEventBase<
      Enums.EventType.THREAD_LIST_SYNC,
      GatewayEventPayloads.GatewayEventThreadListSync
    >
  | GatewayEventBase<Enums.EventType.THREAD_MEMBER_UPDATE, ThreadMember>
  | GatewayEventBase<
      Enums.EventType.THREAD_MEMBERS_UPDATE,
      GatewayEventPayloads.GatewayEventThreadMembersUpdate
    > // halllllllllllllllllllllllllllllllllllllllo
  | GatewayEventBase<Enums.EventType.GUILD_CREATE | Enums.EventType.GUILD_UPDATE, Guild>
  | GatewayEventBase<Enums.EventType.GUILD_DELETE, UnavailableGuild> // Kicked if the unavailable is not set
  | GatewayEventBase<
      Enums.EventType.GUILD_BAN_ADD,
      GatewayEventPayloads.GatewayEventGuildBanAdd
    >
  | GatewayEventBase<
      Enums.EventType.GUILD_BAN_REMOVE,
      GatewayEventPayloads.GatewayEventGuildBanRemove
    > // https://discord.com/developers/docs/topics/gateway#commands-and-events
  | GatewayEventBase<
      Enums.EventType.GUILD_EMOJIS_UPDATE,
      GatewayEventPayloads.GatewayEventGuildEmojisUpdate
    >
  | GatewayEventBase<
      Enums.EventType.GUILD_INTEGRATIONS_UPDATE,
      GatewayEventPayloads.GatewayEventGuildIntegrationsUpdate
    >
  | GatewayEventBase<
      Enums.EventType.GUILD_MEMBER_ADD,
      GuildMember & { guild_id: string }
    >
  | GatewayEventBase<
      Enums.EventType.GUILD_MEMBER_REMOVE,
      GatewayEventPayloads.GatewayEventGuildMemberRemove
    >
  | GatewayEventBase<
      Enums.EventType.GUILD_MEMBER_UPDATE,
      GatewayEventPayloads.GatewayEventGuildMemberUpdate
    >
  | GatewayEventBase<
      Enums.EventType.GUILD_MEMBERS_CHUNK,
      GatewayEventPayloads.GatewayEventGuildMembersChunk
    >
  | GatewayEventBase<
      Enums.EventType.GUILD_ROLE_CREATE,
      GatewayEventPayloads.GatewayEventGuildRoleCreate
    >
  | GatewayEventBase<
      Enums.EventType.GUILD_ROLE_UPDATE,
      GatewayEventPayloads.GatewayEventGuildRoleUpdate
    >
  | GatewayEventBase<
      Enums.EventType.GUILD_ROLE_DELETE,
      GatewayEventPayloads.GatewayEventGuildRoleDelete
    >
  | GatewayEventBase<
      Enums.EventType.INTEGRATION_CREATE | Enums.EventType.INTEGRATION_UPDATE,
      Integration & { guild_id: string }
    >
  | GatewayEventBase<
      Enums.EventType.INTEGRATION_DELETE,
      GatewayEventPayloads.GatewayEventIntegrationDelete
    >
  | GatewayEventBase<Enums.EventType.INTERACTION_CREATE, Interaction>
  | GatewayEventBase<
      Enums.EventType.INVITE_CREATE,
      GatewayEventPayloads.GatewayEventInviteCreate
    >
  | GatewayEventBase<
      Enums.EventType.INVITE_DELETE,
      GatewayEventPayloads.GatewayEventInviteDelete
    >
  | GatewayEventBase<Enums.EventType.MESSAGE_CREATE, Message>
  | GatewayEventBase<Enums.EventType.MESSAGE_UPDATE, Message>
  | GatewayEventBase<
      Enums.EventType.MESSAGE_DELETE,
      GatewayEventPayloads.GatewayEventMessageDelete
    >
  | GatewayEventBase<
      Enums.EventType.MESSAGE_DELETE_BULK,
      GatewayEventPayloads.GatewayEventMessageDeleteBulk
    >
  | GatewayEventBase<
      Enums.EventType.MESSAGE_REACTION_ADD,
      GatewayEventPayloads.GatewayEventReactionAdd
    >
  | GatewayEventBase<
      Enums.EventType.MESSAGE_REACTION_REMOVE,
      GatewayEventPayloads.GatewayEventMessageRemove
    >
  | GatewayEventBase<
      Enums.EventType.MESSAGE_REACTION_REMOVE_ALL,
      GatewayEventPayloads.GatewayEventMessageReactionRemoveAll
    >
  | GatewayEventBase<
      Enums.EventType.MESSAGE_REACTION_REMOVE_EMOJI,
      GatewayEventPayloads.GatewayEventMessageReactionRemoveEmoji
    >
  | GatewayEventBase<
      Enums.EventType.PRESENCE_UPDATE,
      GatewayEventPayloads.GatewayEventPresenceUpdate
    >
  | GatewayEventBase<
      Enums.EventType.TYPING_START,
      GatewayEventPayloads.GatewayEventTypingStart
    >
  | GatewayEventBase<Enums.EventType.USER_UPDATE, User>
  | GatewayEventBase<
      Enums.EventType.VOICE_STATE_UPDATE,
      GatewayEventPayloads.GatewayEventVoiceStateUpdate
    >
  | GatewayEventBase<
      Enums.EventType.VOICE_SERVER_UPDATE,
      GatewayEventPayloads.GatewayEventVoiceServerUpdate
    >
  | GatewayEventBase<
      Enums.EventType.WEBHOOKS_UPDATE,
      GatewayEventPayloads.GatewayEventWebhookUpdate
    >;

export type Gateway =
  | GatewayEvent
  | GatewayBase<Enums.Opcode.HELLO, GatewayPayloads.GatewayHello>
  | GatewayBase<Enums.Opcode.HEARTBEAT, undefined>
  | GatewayBase<Enums.Opcode.INVALID_SESSION, boolean>
  | GatewayBase<Enums.Opcode.RECONNECT, boolean>
  | GatewayBase<Enums.Opcode.HEARTBEAT_ACK, undefined>;
