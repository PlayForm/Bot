import { Client as r } from "discord.js";
import s from "../options/discord.js";
for(const{token:t,options:o,events:e}of s){if(!o)continue;const n=new r(o);for(const[i,f]of e??[])n.on(i,f);n.login(t)}
