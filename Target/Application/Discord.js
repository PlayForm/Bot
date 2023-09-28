"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var DISCORD_js_1 = require("../Option/DISCORD.js");
for (var _i = 0, defaultsDiscord_1 = DISCORD_js_1.default; _i < defaultsDiscord_1.length; _i++) {
    var _a = defaultsDiscord_1[_i], token = _a.token, options = _a.options, events = _a.events;
    if (!options) {
        continue;
    }
    var client = new discord_js_1.Client(options);
    for (var _b = 0, _c = events !== null && events !== void 0 ? events : []; _b < _c.length; _b++) {
        var _d = _c[_b], name_1 = _d[0], event_1 = _d[1];
        client.on(name_1, event_1);
    }
    client.login(token);
}
exports.default = {};
