import { GatewayIntentBits, type ClientOptions } from "discord.js";

export const { DISCORD_APPLICATION_ID, DISCORD_PUBLIC_KEY, DISCORD_TOKENS } = (
	await import("@Variable/Environment.js")
).default.parse(process.env);

export const Tokens =
	DISCORD_TOKENS.indexOf(",") !== -1
		? DISCORD_TOKENS.split(",")
		: [DISCORD_TOKENS];

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

export const Clients: Client[] = [
	{
		token: "",
		events: new Map([
			[
				"message",
				async (message: string) => {
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
			const applicationId = DISCORD_APPLICATION_ID;

			if (!DISCORD_PUBLIC_KEY) {
				throw new Error(
					"The DISCORD_TOKEN environment variable is required.",
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
					`https://discord.com/api/v10/applications/${applicationId}/commands`,
				);
			}

			await registerGlobalCommands();
		},
	},
];

export default Clients.map((Client, Index) => {
	const Token = Tokens[Index];

	if (Token) {
		Client.token = Token;
	} else {
		console.log(`No token for client: ${Index}`);
	}

	return Client;
});
