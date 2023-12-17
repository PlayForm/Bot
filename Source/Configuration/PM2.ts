import type { StartOptions } from "pm2";

export type Apps = StartOptions[];

export type Ecosystem = {
	apps: Apps;
};

export default ({
	apps: [
		{
			name: "discord",
			script: "./Target/apps/discord.js",
			watch: true,
			autorestart: true,
			force: true,
		},
	],
} satisfies Ecosystem);
