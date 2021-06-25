// deno-lint-ignore-file camelcase

// https://discord.com/developers/docs/topics/rate-limits#exceeding-a-rate-limit-rate-limit-response-structure
export interface RateLimitResponse {
  message: string;
  retry_after: number;
  global: boolean;
}