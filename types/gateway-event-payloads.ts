// deno-lint-ignore-file camelcase
import {
  Application,
  Channel,
  Guild,
  ThreadMember,
  User,
  Emoji,
  GuildMember,
  Activity,
  ClientStatus,
  PresenceObject,
  Role,
} from "./types.ts";

// https://discord.com/developers/docs/topics/gateway#ready-ready-event-fields
export interface GatewayEventReady {
  v: number;
  user: User;
  guilds: Partial<Guild>[];
  session_id: string;
  shard?: number[];
  guild_join_requests: unknown[];
  geo_ordered_rtc_regions: string[];
  application: Partial<Application>;
}

// https://discord.com/developers/docs/topics/gateway#channel-pins-update-channel-pins-update-event-fields
export interface GatewayEventChannelPinsUpdate {
  guild_id?: string;
  channel_id: string;
  last_pin_timestamp?: Date;
}

// https://discord.com/developers/docs/topics/gateway#thread-list-sync-thread-list-sync-event-fields
export interface GatewayEventThreadListSync {
  guild_id?: string;
  channel_ids?: string[];
  threads: Channel[];
  members: ThreadMember[];
}

// https://discord.com/developers/docs/topics/gateway#thread-members-update-thread-members-update-event-fields
export interface GatewayEventThreadMembersUpdate {
  id: string;
  guild_id: string;
  member_count: number;
  added_members?: ThreadMember[];
  removed_member_ids?: string[];
}

// https://discord.com/developers/docs/topics/gateway#guild-ban-add-guild-ban-add-event-fields
export interface GatewayEventGuildBanAdd {
  guild_id: string;
  user: User;
}

// https://discord.com/developers/docs/topics/gateway#guild-ban-remove-guild-ban-remove-event-fields
export interface GatewayEventGuildBanRemove {
  guild_id: string;
  user: User;
}

// https://discord.com/developers/docs/topics/gateway#guild-emojis-update-guild-emojis-update-event-fields
export interface GatewayEventGuildEmojisUpdate {
  guild_id: string;
  emojis: Emoji[]
}

// https://discord.com/developers/docs/topics/gateway#guild-integrations-update-guild-integrations-update-event-fields
export interface GatewayEventGuildIntegrationsUpdate {
  guild_id: string;
}

// https://discord.com/developers/docs/topics/gateway#guild-member-remove-guild-member-remove-event-fields
export interface GatewayEventGuildMemberRemove {
  guild_id: string;
  user: User;
}

// https://discord.com/developers/docs/topics/gateway#guild-member-update
export interface GatewayEventGuildMemberUpdate {
  guild_id: string;
  roles: string[];
  user: User;
  nick?: string;
  joined_at: Date;
  premium_since?: Date;
  deaf?: boolean;
  mute?: boolean;
  pending?: boolean;
}

// https://discord.com/developers/docs/topics/gateway#guild-members-chunk-guild-members-chunk-event-fields
export interface GatewayEventGuildMembersChunk {
  guild_id: string;
  members: GuildMember[];
  chunk_index: number;
  chunk_size: number;
  not_found?: [];
  presences?: PresenceObject[];
  nonce?: string;
}

// https://discord.com/developers/docs/topics/gateway#guild-role-create-guild-role-create-event-fields
export interface GatewayEventGuildRoleCreate {
  guild_id: string;
  role: Role;
}

// https://discord.com/developers/docs/topics/gateway#guild-role-update-guild-role-update-event-fields
export interface GatewayEventGuildRoleUpdate {
  guild_id: string;
  role: Role;
}

// https://discord.com/developers/docs/topics/gateway#guild-role-delete-guild-role-delete-event-fields
export interface GatewayEventGuildRoleDelete {
  guild_id: string;
  role_id: string;
}

// https://discord.com/developers/docs/topics/gateway#integration-delete-integration-delete-event-fields
export interface GatewayEventIntegrationDelete {
  id: string;
  guild_id: string;
  application_id?: string;
}


// https://discord.com/developers/docs/topics/gateway#invite-create
export interface GatewayEventInviteCreate {
  channel_id: string;
  code: string;
  created_at: string;
  guild_id?: string;
  inviter?: User;
  max_age: number;
  max_uses: number;
  target_type?: number;
  target_user?: User;
  target_applcation: Partial<Application>;
  temporary: boolean;
  uses: number;
}

// https://discord.com/developers/docs/topics/gateway#invite-delete
export interface GatewayEventInviteDelete {
  channel_id: string;
  guild_id?: string;
  code: string;
}

// https://discord.com/developers/docs/topics/gateway#message-delete
export interface GatewayEventMessageDelete {
  id: string;
  channel_id: string;
  guild_id?: string;
}

// https://discord.com/developers/docs/topics/gateway#message-delete-bulk
export interface GatewayEventMessageDeleteBulk {
  ids: string[];
  channel_id: string;
  guild_id?: string;
}

// https://discord.com/developers/docs/topics/gateway#message-reaction-add
export interface GatewayEventReactionAdd {
  user_id: string;
  channel_id: string;
  message_id: string;
  guild_id?: string;
  member?: GuildMember;
  emoji: Partial<Emoji>;
}

// https://discord.com/developers/docs/topics/gateway#message-reaction-remove
export interface GatewayEventMessageRemove {
  user_id: string;
  channel_id: string;
  message_id: string;
  guild_id?: string;
  emoji: Partial<Emoji>;
}

// https://discord.com/developers/docs/topics/gateway#message-reaction-remove-all
export interface GatewayEventMessageReactionRemoveAll {
  channel_id: string;
  message_id: string;
  guild_id?: string;
}

// https://discord.com/developers/docs/topics/gateway#message-reaction-remove-emoji
export interface GatewayEventMessageReactionRemoveEmoji {
  channel_id: string;
  guild_id?: string;
  message_id: string;
  emoji: Partial<Emoji>;
}

// https://discord.com/developers/docs/topics/gateway#presence-update
export interface GatewayEventPresenceUpdate {
  user: User;
  guild_id: string;
  status: string;
  activities: Activity[];
  client_status: ClientStatus
}

// https://discord.com/developers/docs/topics/gateway#typing-start
export interface GatewayEventTypingStart {
  channel_id: string;
  guild_id?: string;
  user_id: string;
  timestamp: number;
  member?: GuildMember;
}

// https://discord.com/developers/docs/topics/gateway#voice-state-update
export interface GatewayEventVoiceStateUpdate {
  token: string;
  guild_id: string;
  endpoint?: string;
}

// https://discord.com/developers/docs/topics/gateway#voice-server-update
export interface GatewayEventVoiceServerUpdate {
  token: string;
  guild_id: string;
  endpoint?: string;
}

// https://discord.com/developers/docs/topics/gateway#webhooks-update
export interface GatewayEventWebhookUpdate {
  guild_id: string;
  channel_id: string;
}
