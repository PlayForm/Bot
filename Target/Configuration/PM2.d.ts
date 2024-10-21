import type { StartOptions } from "pm2";
export type Apps = StartOptions[];
export type Ecosystem = {
    apps: Apps;
};
declare const _default: {
    apps: {
        name: string;
        script: string;
        watch: true;
        autorestart: true;
        force: true;
    }[];
};
export default _default;
