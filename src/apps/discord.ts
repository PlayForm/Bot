import { Client } from "discord.js";

import defaultsDiscord from "../options/discord.js";

for (const { token, options, events } of defaultsDiscord) {
	if (!options) {
		continue;
	}

	const client = new Client(options);

	for (const [name, event] of events ?? []) {
		client.on(name, event);
	}

	client.login(token);
}

export default {}
