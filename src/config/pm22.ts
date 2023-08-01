import type { StartOptions } from "pm2";

export type Apps = StartOptions[];

export type Ecosystem = {
	apps: Apps;
};

export default {
	apps: [
		{
			name: "discord",
			script: "./dist/apps/discord.js",
			watch: true,
			autorestart: true,
			force: true,
		},
	],
} satisfies Ecosystem;
