export declare const DISCORD_APPLICATION_ID: string, DISCORD_PUBLIC_KEY: string, DISCORD_TOKENS: string;
export declare const Tokens: string[];
export type Client = {
    events?: Map<string, (...args: string[]) => Promise<void>>;
    options?: ClientOptions;
    token?: string;
    preflight?: (...args: string[]) => Promise<void>;
};
export type Flight = {
    routes: [];
    preflight: () => Promise<void>;
};
export declare const Clients: Client[];
declare const _default: Client[];
export default _default;
import type { ClientOptions } from "discord.js";
