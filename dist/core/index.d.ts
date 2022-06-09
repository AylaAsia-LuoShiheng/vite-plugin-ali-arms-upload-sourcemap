export declare type ConfigType = {
    accessKeyId: string;
    accessKeySecret: string;
    pid: string;
    maxRetryTimes?: number;
    disabled?: boolean;
};
export default function ({ accessKeyId, accessKeySecret, pid, maxRetryTimes, disabled }: ConfigType, outDirFinal: string): void;
