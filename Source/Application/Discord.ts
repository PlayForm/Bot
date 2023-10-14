for (const { token, options, events } of (await import("../Option/DISCORD.js"))
	.default) {
	if (!options) {
		continue;
	}

	const client = new (await import("discord.js")).Client(options);

	for (const [name, event] of events ?? []) {
		client.on(name, event);
	}

	client.login(token);
}

export default {};
