import { ClientOptions, GatewayIntentBits } from "discord.js";

import env from "../lib/env.js";

const tokens =
	// rome-ignore lint/nursery/noPrecisionLoss:
	env.DISCORD_TOKENS.indexOf(",") !== -1
		? env.DISCORD_TOKENS.split(",")
		: [env.DISCORD_TOKENS];

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

const clients: Client[] = [
	{
		token: "",
		events: new Map([
			[
				"message",
				async (message: any) => {
					console.log(message);
				},
			],
		]),
		options: {
			intents: [
				GatewayIntentBits.GuildMembers,
				GatewayIntentBits.GuildMessages,
				GatewayIntentBits.Guilds,
				GatewayIntentBits.MessageContent,
			],
		},
		preflight: async (token: string) => {
			const applicationId = env.DISCORD_APPLICATION_ID;

			if (!env.DISCORD_PUBLIC_KEY) {
				throw new Error(
					"The DISCORD_TOKEN environment variable is required."
				);
			}

			async function registerCommands(url: string) {
				const response = await fetch(url, {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bot ${token}`,
					},
					method: "PUT",
					body: JSON.stringify([AWW_COMMAND, INVITE_COMMAND]),
				});

				if (response.ok) {
					console.log("Registered all commands");
				} else {
					console.error("Error registering commands");
					const text = await response.text();
					console.error(text);
				}

				return response;
			}

			async function registerGlobalCommands() {
				await registerCommands(
					`https://discord.com/api/v10/applications/${applicationId}/commands`
				);
			}

			await registerGlobalCommands();
		},
	},
];

export default clients.map((client, index) => {
	const token = tokens[index];

	if (token) {
		client.token = token;
	} else {
		console.log(`No token for client: ${index}`);
	}

	return client;
});
