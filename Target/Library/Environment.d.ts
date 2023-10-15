export declare const object: <T extends import("zod").ZodRawShape>(shape: T, params?: import("zod").RawCreateParams) => import("zod").ZodObject<T, "strip", import("zod").ZodTypeAny, { [k_1 in keyof import("zod").objectUtil.addQuestionMarks<import("zod").baseObjectOutputType<T>, { [k in keyof import("zod").baseObjectOutputType<T>]: undefined extends import("zod").baseObjectOutputType<T>[k] ? never : k; }[keyof T]>]: import("zod").objectUtil.addQuestionMarks<import("zod").baseObjectOutputType<T>, { [k_2 in keyof import("zod").baseObjectOutputType<T>]: undefined extends import("zod").baseObjectOutputType<T>[k_2] ? never : k_2; }[keyof T]>[k_1]; }, { [k_2 in keyof import("zod").baseObjectInputType<T>]: import("zod").baseObjectInputType<T>[k_2]; }>, string: (params?: ({
    errorMap?: import("zod").ZodErrorMap | undefined;
    invalid_type_error?: string | undefined;
    required_error?: string | undefined;
    description?: string | undefined;
} & {
    coerce?: true | undefined;
}) | undefined) => import("zod").ZodString;
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
