export declare const object: <Shape extends import("zod").ZodRawShape>(shape: Shape, params?: import("zod").RawCreateParams) => import("zod").ZodObject<Shape, "strip", import("zod").ZodTypeAny, import("zod").objectOutputType<Shape, import("zod").ZodTypeAny, "strip">, import("zod").objectInputType<Shape, import("zod").ZodTypeAny, "strip">>, string: (params?: import("zod").RawCreateParams & {
    coerce?: true;
}) => import("zod").ZodString;
declare const _default: import("zod").ZodObject<{
    DISCORD_APPLICATION_ID: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
    DISCORD_CLIENT_ID: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
    DISCORD_CLIENT_SECRET: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
    DISCORD_PUBLIC_KEY: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
    DISCORD_TOKENS: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
}, "strip", import("zod").ZodTypeAny, {
    DISCORD_APPLICATION_ID: string;
    DISCORD_CLIENT_ID: string;
    DISCORD_CLIENT_SECRET: string;
    DISCORD_PUBLIC_KEY: string;
    DISCORD_TOKENS: string;
}, {
    DISCORD_APPLICATION_ID?: string | undefined;
    DISCORD_CLIENT_ID?: string | undefined;
    DISCORD_CLIENT_SECRET?: string | undefined;
    DISCORD_PUBLIC_KEY?: string | undefined;
    DISCORD_TOKENS?: string | undefined;
}>;
export default _default;
