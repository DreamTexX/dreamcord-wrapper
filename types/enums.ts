// https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes
export enum Opcode {
  DISPATCH = 0,
  HEARTBEAT = 1,
  IDENTIFY = 2,
  PRESENCE_UPDATE = 3,
  VOICE_STATE_UPDATE = 4,
  RESUME = 6,
  RECONNECT = 7,
  REQUEST_GUILD_MEMBERS = 8,
  INVALID_SESSION = 9,
  HELLO = 10,
  HEARTBEAT_ACK = 11,
}

// https://discord.com/developers/docs/topics/gateway#commands-and-events-gateway-events
export enum EventType {
  READY = "READY",
  RESUMED = "RESUMED",
  APPLICATION_COMMAND_CREATE = "APPLICATION_COMMAND_CREATE",
  APPLICATION_COMMAND_UPDATE = "APPLICATION_COMMAND_UPDATE",
  APPLICATION_COMMAND_DELETE = "APPLICATION_COMMAND_DELETE",
  CHANNEL_CREATE = "CHANNEL_CREATE",
  CHANNEL_UPDATE = "CHANNEL_UPDATE",
  CHANNEL_DELETE = "CHANNEL_DELETE",
  CHANNEL_PINS_UPDATE = "CHANNEL_PINS_UPDATE",
  THREAD_CREATE = "THREAD_CREATE",
  THREAD_UPDATE = "THREAD_UPDATE",
  THREAD_DELETE = "THREAD_DELETE",
  THREAD_LIST_SYNC = "THREAD_LIST_SYNC",
  THREAD_MEMBER_UPDATE = "THREAD_MEMBER_UPDATE",
  THREAD_MEMBERS_UPDATE = "THREAD_MEMBERS_UPDATE",
  GUILD_CREATE = "GUILD_CREATE",
  GUILD_UPDATE = "GUILD_UPDATE",
  GUILD_DELETE = "GUILD_DELETE",
  GUILD_BAN_ADD = "GUILD_BAN_ADD",
  GUILD_BAN_REMOVE = "GUILD_BAN_REMOVE",
  GUILD_EMOJIS_UPDATE = "GUILD_EMOJIS_UPDATE",
  GUILD_INTEGRATIONS_UPDATE = "GUILD_INTEGRATIONS_UPDATE",
  GUILD_MEMBER_ADD = "GUILD_MEMBER_ADD",
  GUILD_MEMBER_REMOVE = "GUILD_MEMBER_REMOVE",
  GUILD_MEMBER_UPDATE = "GUILD_MEMBER_UPDATE",
  GUILD_MEMBERS_CHUNK = "GUILD_MEMBERS_CHUNK",
  GUILD_ROLE_CREATE = "GUILD_ROLE_CREATE",
  GUILD_ROLE_UPDATE = "GUILD_ROLE_UPDATE",
  GUILD_ROLE_DELETE = "GUILD_ROLE_DELETE",
  INTEGRATION_CREATE = "INTEGRATION_CREATE",
  INTEGRATION_UPDATE = "INTEGRATION_UPDATE",
  INTEGRATION_DELETE = "INTEGRATION_DELETE",
  INTERACTION_CREATE = "INTERACTION_CREATE",
  INVITE_CREATE = "INVITE_CREATE",
  INVITE_DELETE = "INVITE_DELETE",
  MESSAGE_CREATE = "MESSAGE_CREATE",
  MESSAGE_UPDATE = "MESSAGE_UPDATE",
  MESSAGE_DELETE = "MESSAGE_DELETE",
  MESSAGE_DELETE_BULK = "MESSAGE_DELETE_BULK",
  MESSAGE_REACTION_ADD = "MESSAGE_REACTION_ADD",
  MESSAGE_REACTION_REMOVE = "MESSAGE_REACTION_REMOVE",
  MESSAGE_REACTION_REMOVE_ALL = "MESSAGE_REACTION_REMOVE_ALL",
  MESSAGE_REACTION_REMOVE_EMOJI = "MESSAGE_REACTION_REMOVE_EMOJI",
  PRESENCE_UPDATE = "PRESENCE_UPDATE",
  TYPING_START = "TYPING_START",
  USER_UPDATE = "USER_UPDATE",
  VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE",
  VOICE_SERVER_UPDATE = "VOICE_SERVER_UPDATE",
  WEBHOOKS_UPDATE = "WEBHOOKS_UPDATE",
}

// https://discord.com/developers/docs/resources/guild#guild-object-mfa-level
export enum MfaLevel {
  NONE = 0,
  ELEVATED = 1,
}

// https://discord.com/developers/docs/resources/guild#guild-object-verification-level
export enum VerificationLevel {
  NONE = 0,
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
  VERY_HIGH = 4,
}

// https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum
export enum TeamMembershipState {
  INVITED = 1,
  ACCEPTED = 2,
}

// https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level
export enum DefaultMessageNotifications {
  ALL_MESSAGES = 0,
  ONLY_MENTIONS = 1,
}

// https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level
export enum ExplicitContentFilterLevel {
  DISABLED = 0,
  MEMBER_WITHOUT_ROLES = 1,
  ALL_MEMBERS = 2,
}

// https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags
export enum SystemChannelFlag {
  SUPPRESS_JOIN_NOTIFICATIONS = 1 << 0,
  SUPPRESS_PREMIUM_SUBSCRIPTIONS = 1 << 1,
  SUPPRESS_GUILD_REMINDER_NOTIFICATIONS = 1 << 2,
}

// https://discord.com/developers/docs/resources/guild#guild-object-guild-features
export enum GuildFeature {
  ANIMATED_ICON = "ANIMATED_ICON",
  BANNER = "BANNER",
  COMMERCE = "COMMERCE",
  COMMUNITY = "COMMUNITY",
  DISCOVERABLE = "DISCOVERABLE",
  FEATURABLE = "FEATURABLE",
  INVITE_SPLASH = "INVITE_SPLASH",
  MEMBER_VERIFICATION_GATE_ENABLED = "MEMBER_VERIFICATION_GATE_ENABLED",
  NEWS = "NEWS",
  PARTNERED = "PARTNERED",
  PREVIEW_ENABLED = "PREVIEW_ENABLED",
  VANITY_URL = "VANITY_URL",
  VERIFIED = "VERIFIED",
  VIP_REGIONS = "VIP_REGIONS", // Upto 384kbps in voice
  WELCOME_SCREEN_ENABLED = "WELCOME_SCREEN_ENABLED",
}

// https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level
export enum PrivacyLevel {
  PUBLIC = 1,
  GUILD_ONLY = 2,
}

// https://discord.com/developers/docs/resources/channel#channel-object-channel-types
export enum ChannelType {
  GUILD_TEXT = 0,
  DM = 1,
  GUILD_VOICE = 2,
  GROUP_DM = 3,
  GUILD_CATEGORY = 4,
  GUILD_NEWS = 5,
  GUILD_STORE = 6,
  GUILD_NEWS_THREAD = 10,
  GUILD_PUBLIC_THREAD = 11,
  GUILD_PRIVATE_THREAD = 12,
  GUILD_STAGE_VOICE = 13,
}

// https://discord.com/developers/docs/topics/gateway#activity-object-activity-flags
export enum ActivityFlag {
  INSTANCE = 1 << 0,
  JOIN = 1 << 1,
  SPECTATE = 1 << 2,
  JOIN_REQUEST = 1 << 3,
  SYNC = 1 << 4,
  PLAY = 1 << 5,
}

// https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level
export enum NsfwLevel {
  DEFAULT = 0,
  EXPLICIT = 1,
  SAFE = 2,
  AGE_RESTRICTED = 3,
}

// https://discord.com/developers/docs/resources/guild#guild-object-premium-tier
export enum PremiumTier {
  NONE = 0,
  TIER_1 = 1,
  TIER_2 = 2,
  TIER_3 = 3,
}

// https://discord.com/developers/docs/topics/gateway#activity-object-activity-types
export enum ActivityType {
  GAME = 0,
  STREAMING = 1,
  LISTENING = 2,
  WATCHING = 3,
  CUSTOM = 4,
  COMPETING = 5,
}

// There is no doc to that :c
export enum PermissionOverwriteType {
  ROLE = 0,
  MEMBER = 1,
}

// https://discord.com/developers/docs/interactions/slash-commands#applicationcommandoptiontype
export enum ApplicationCommandOptionType {
  SUB_COMMAND = 1,
  SUB_COMMAND_GROUP = 2,
  STRING = 3,
  INTEGER = 4,
  BOOLEAN = 5,
  USER = 6,
  CHANNEL = 7,
  ROLE = 8,
  MENTIONABLE = 9,
}

// https://discord.com/developers/docs/topics/gateway#list-of-intents
export enum Intent {
  GUILDS = 1 << 0,
  GUILD_MEMBERS = 1 << 1,
  GUILD_BANS = 1 << 2,
  GUILD_EMOJIS = 1 << 3,
  GUILD_INTEGRATIONS = 1 << 4,
  GUILD_WEBHOOKS = 1 << 5,
  GUILD_INVITES = 1 << 6,
  GUILD_VOICE_STATES = 1 << 7,
  GUILD_PRESENCES = 1 << 8,
  GUILD_MESSAGES = 1 << 9,
  GUILD_MESSAGE_REACTIONS = 1 << 10,
  GUILD_MESSAGE_TYPING = 1 << 11,
  DIRECT_MESSAGES = 1 << 12,
  DIRECT_MESSAGE_REACTIONS = 1 << 13,
  DIRECT_MESSAGE_TYPING = 1 << 14,

  // CUSTOM: ALL
  ALL = GUILDS |
    GUILD_MEMBERS |
    GUILD_BANS |
    GUILD_EMOJIS |
    GUILD_INTEGRATIONS |
    GUILD_WEBHOOKS |
    GUILD_INVITES |
    GUILD_VOICE_STATES |
    GUILD_PRESENCES |
    GUILD_MESSAGES |
    GUILD_MESSAGE_REACTIONS |
    GUILD_MESSAGE_TYPING |
    DIRECT_MESSAGES |
    DIRECT_MESSAGE_REACTIONS |
    DIRECT_MESSAGE_TYPING,
    
  // CUSTOM: Guild Only
  ALL_GUILD_ONLY = GUILDS |
    GUILD_MEMBERS |
    GUILD_BANS |
    GUILD_EMOJIS |
    GUILD_INTEGRATIONS |
    GUILD_WEBHOOKS |
    GUILD_INVITES |
    GUILD_VOICE_STATES |
    GUILD_PRESENCES |
    GUILD_MESSAGES |
    GUILD_MESSAGE_REACTIONS |
    GUILD_MESSAGE_TYPING,
}

export enum IntegrationExpireBehavior {
  ROMCE_ROLE = 0,
  KICK = 1,
}

// https://discord.com/developers/docs/resources/channel#message-object-message-sticker-format-types
export enum MessageStickerFormatType {
  PNG = 1,
  APNG = 2,
  LOTTIE = 3,
}

// https://discord.com/developers/docs/resources/channel#message-object-message-types
export enum MessageType {
  DEFAULT = 0,
  RECIPIENT_ADD = 1,
  RECIPIENT_REMOVE = 2,
  CALL = 3,
  CHANNEL_NAME_CHANGE = 4,
  CHANNEL_ICON_CHANGE = 5,
  CHANNEL_PINNED_MESSAGE = 6,
  GUILD_MEMBER_JOIN = 7,
  USER_PREMIUM_GUILD_SUBSCRIPTION = 8,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1 = 9,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2 = 10,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3 = 11,
  CHANNEL_FOLLOW_ADD = 12,
  GUILD_DISCOVERY_DISQUALIFIED = 14,
  GUILD_DISCOVERY_REQUALIFIED = 15,
  GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING = 16,
  GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING = 17,
  THREAD_CREATED = 18,
  REPLY = 19, // Only in API v8, still '0' in v6
  APPLICATION_COMMAND = 20, // Only in API v8, still '0' in v6
  THREAD_STARTER_MESSAGE = 21, // Only in API v9
  GUILD_INVITE_REMINDER = 22,
}

// https://discord.com/developers/docs/resources/channel#message-object-message-flags
export enum MessageFlag {
  CROSSPOSTED = 1 << 0,
  IS_CROSSPOSTED = 1 << 1,
  SUPRESS_EMBEDS = 1 << 2,
  SOURCE_MESSAGE_DELETED = 1 << 3,
  URGENT = 1 << 4,
  HAS_THREAD = 1 << 5,
  EPHEMERA = 1 << 6,
  LOADING = 1 << 7
}

// https://discord.com/developers/docs/interactions/slash-commands#interaction-interactiontype
export enum InteractionType {
  PING = 1,
  APPLICATION_COMMAND = 2,
  MESSAGE_COMPONENT = 3,
}
// https://discord.com/developers/docs/interactions/message-components#component-types
export enum ComponentType {
  ACTION_ROW = 1,
  BUTTON = 2,
  SELECT_MENU = 3
}

// https://discord.com/developers/docs/interactions/message-components#buttons-button-styles
export enum ButtonStyle {
  PRIMARY = 1,
  SECONDARY = 2,
  SUCCESS = 3,
  DANGER = 4,
  LINK = 5
}

// https://discord.com/developers/docs/resources/invite#invite-object-invite-target-types
export enum TargetType {
  STREAM = 1,
  EMBEDDED_APPLICATION = 2,
}

// https://discord.com/developers/docs/reference#image-formatting
export enum ImageFormat {
  JPG = ".jpg",
  JPEG = ".jpeg",
  PNG = ".png",
  WEBP = ".webp",
  GIF = ".gif"
}

// https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types
export enum WebhookType {
  INCOMING = 1,
  CHANNEL_FOLLOWER = 2,
  APPLICATION = 3
}

// https://discord.com/developers/docs/resources/user#user-object-user-flags
export enum UserFlag {
  NONE = 0,
  DISCORD_EMPLOYEE = 1 << 0,
  PARTNERED_SERVER_OWNER = 1 << 1,
  HYPESQUAD_EVENT = 1 << 2,
  BUG_HUNTER_LEVEL_1 = 1 << 3,
  HOUSE_BRAVERY = 1 << 4,
  HOUSE_BRILLIANCE = 1 << 5,
  HOUSE_BALANCE = 1 << 6,
  EARLY_SUPPORTER = 1 << 9,
  TEAM_USER = 1 << 10,
  BUG_HUNTER_LEVEL_2 = 1 << 11,
  VERIFIED_BOT = 1 << 12,
  EARLY_VERIFIED_BOT_DEVELOPER = 1 << 13,
  DISCORD_CERTIFIED_MODERATOR = 1 << 14,
}

// https://discord.com/developers/docs/resources/user#user-object-premium-types
export enum PermiumType {
  NONE = 0,
  NITRO_CLASSIC = 1,
  NITRO = 2,
}

// https://discord.com/developers/docs/resources/user#connection-object-visibility-types
export enum VisibilityType {
  NONE = 0,
  EVERYONE = 1
}

// https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes
export enum VideoQualityMode {
  AUTO = 1,
  FULL = 2
}

// https://discord.com/developers/docs/resources/application#application-object-application-flags
export enum ApplicationFlags {
  GATEWAY_PRESENCE = 1 << 12,
  GATEWAY_PRESENCE_LIMITED = 1 << 13,
  GATEWAY_GUILD_MEMBERS = 1 << 14,
  GATEWAY_GUILD_MEMBERS_LIMITED = 1 << 15,
  VERIFICATION_PENDING_GUILD_LIMIT = 1 << 16,
  EMBEDDED = 1 << 17,
}

// https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-events
export enum AuditLogEvents {
  GUILD_UPDATE = 1,
  CHANNEL_CREATE = 10,
  CHANNEL_UPDATE = 11,
  CHANNEL_DELETE = 12,
  CHANNEL_OVERWRITE_CREATE = 13,
  CHANNEL_OVERWRITE_UPDATE = 14,
  CHANNEL_OVERWRITE_DELETE = 15,
  MEMBER_KICK = 20,
  MEMBER_PRUNE = 21,
  MEMBER_BAN_ADD = 22,
  MEMBER_BAN_REMOVE = 23,
  MEMBER_UPDATE = 24,
  MEMBER_ROLE_UPDATE = 25,
  MEMBER_MOVE = 26,
  MEMBER_DISCONNECT = 27,
  BOT_ADD = 28,
  ROLE_CREATE = 30,
  ROLE_UPDATE = 31,
  ROLE_DELETE = 32,
  INVITE_CREATE = 40,
  INVITE_UPDATE = 41,
  INVITE_DELETE = 42,
  WEBHOOK_CREATE = 50,
  WEBHOOK_UPDATE = 51,
  WEBHOOK_DELETE = 52,
  EMOJI_CREATE = 60,
  EMOJI_UPDATE = 61,
  EMOJI_DELETE = 62,
  MESSAGE_DELETE = 72,
  MESSAGE_BULK_DELETE = 73,
  MESSAGE_PIN = 74,
  MESSAGE_UNPIN = 75,
  INTEGRATION_CREATE = 80,
  INTEGRATION_UPDATE = 81,
  INTEGRATION_DELETE = 82,
}

// https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mention-types
export enum AllowedMention {
  ROLE_MENTION = "roles",
  USER_MENTIONS = "user",
  EVERYONE_MENTONS = "everyone",
}

// https://discord.com/developers/docs/interactions/slash-commands#interaction-response-interactioncallbacktype
export enum InteractionCallbackType {
  PONG = 1,
  CHANNEL_MESSAGE_WITH_SOURCE = 4,
  DEFERREND_CHANNEL_MESSAGE_WITH_SOURCE = 5,
  DEFFEREND_UPDATE_MESSAGE = 6,
  UPDATE_MESSAGE = 7
}

export enum InteractionFlag {
  PRIVATE = 64,
  PUBLIC = 0,
}