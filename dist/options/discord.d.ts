import { ClientOptions } from "discord.js";
export type Client = {
    events?: Map<string, (...args: string[]) => Promise<void>>;
    options?: ClientOptions;
    token?: string;
    preflight?: () => Promise<void>;
};
declare const _default: Client[];
export default _default;
