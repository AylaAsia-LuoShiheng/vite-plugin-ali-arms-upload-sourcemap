import { Plugin } from "vite";
declare type ConfigType = {
    accessKeyId: string;
    accessKeySecret: string;
    pid: string;
    maxRetryTimes?: number;
};
export default function pluginConfig({ accessKeyId, accessKeySecret, pid, maxRetryTimes }: ConfigType): Plugin;
export {};
