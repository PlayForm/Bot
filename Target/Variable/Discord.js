for(const{token:n,options:t,events:e}of(await import("../Option/Discord.js")).default){if(!t)continue;const o=new(await import("discord.js")).Client(t);for(const[i,a]of e??[])o.on(i,a);o.login(n)}var f={};export{f as default};