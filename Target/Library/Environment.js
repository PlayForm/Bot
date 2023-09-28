"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var zod_1 = require("zod");
(0, dotenv_1.config)();
exports.default = zod_1.z
    .object({
    DISCORD_APPLICATION_ID: zod_1.z.string().default(""),
    DISCORD_CLIENT_ID: zod_1.z.string().default(""),
    DISCORD_CLIENT_SECRET: zod_1.z.string().default(""),
    DISCORD_PUBLIC_KEY: zod_1.z.string().default(""),
    DISCORD_TOKENS: zod_1.z.string().default(""),
})
    .parse(process.env);
