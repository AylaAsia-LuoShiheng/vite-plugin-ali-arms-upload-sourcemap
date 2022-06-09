import * as $ARMS20190808 from "@alicloud/arms20190808";
declare type ClientConfigType = {
    accessKeyId: string;
    accessKeySecret: string;
    regionId?: string;
    [key: string]: any;
};
declare type UploadConfigType = {
    fileName: string;
    file: string;
    [key: string]: any;
};
export default class Client {
    private client;
    private pid;
    constructor(clientConfig: ClientConfigType, pid: any);
    /**
     * 使用AK&SK初始化账号Client
     * @param accessKeyId
     * @param accessKeySecret
     * @param regionId
     * @return
     * @throws Exception
     */
    createClient(clientConfig: ClientConfigType): void;
    main(uploadConfig: UploadConfigType): Promise<$ARMS20190808.UploadResponse>;
}
export {};
