"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const utils_1 = require("./utils");
const main_1 = __importDefault(require("./main"));
// 兜底， 最大重试次数
let maxRetryTimesVal = 6;
function pluginConfig({ accessKeyId, accessKeySecret, pid, maxRetryTimes }) {
    let config;
    if (typeof maxRetryTimes === "number") {
        maxRetryTimesVal = maxRetryTimes;
    }
    return {
        name: "vite-plugin-arms-upload-sourcemap",
        apply: "build",
        configResolved(resolvedConfig) {
            config = resolvedConfig;
        },
        closeBundle() {
            console.log("start time:", new Date().toISOString());
            const { root } = config;
            const { outDir, assetsDir } = config.build;
            const outDirFinal = path_1.default.resolve(root, outDir, assetsDir);
            const allMapFiles = (0, utils_1.readDir)(outDirFinal).filter(file => file.endsWith(".map"));
            const uploadClient = new main_1.default({ accessKeyId, accessKeySecret }, pid);
            // allMapFiles.forEach(file => {
            //   const fileData = readFile(outDirFinal + "/" + file);
            //   uploadClient.main({ fileName: file, file: fileData });
            //   console.log(new Date().toISOString());
            // });
            // return;
            // 上面可能会触发阿里云风控，端口调用限制，
            // 处理方案是一个一个上传， 触发风控后就让未上传的列表等等， 5秒后继续
            let laterList = [];
            let retryInfo = {};
            const handleUpload = (fileList, index) => {
                const fileName = fileList[index];
                const fileData = (0, utils_1.readFile)(outDirFinal + "/" + fileName);
                uploadClient
                    .main({ fileName, file: fileData })
                    .then(() => {
                    console.log("one file upload success");
                    if (index < fileList.length - 1) {
                        handleUpload(fileList, index + 1);
                    }
                    else {
                        console.log("end time:", new Date().toISOString());
                    }
                })
                    .catch(err => {
                    console.log(err);
                    laterList = fileList.slice(index);
                    retryInfo[fileName] = retryInfo[fileName] ? retryInfo[fileName] + 1 : 1;
                    // 同一个文件阻塞最大次数， 跳过
                    if (retryInfo[fileName] >= maxRetryTimesVal) {
                        console.log("failed upload: " + fileName);
                        handleUpload(laterList, 1);
                        return;
                    }
                    console.log("wait 5 sec...");
                    setTimeout(() => {
                        handleUpload(laterList, 0);
                    }, 1000 * 0);
                });
            };
            handleUpload(allMapFiles, 0);
        }
    };
}
exports.default = pluginConfig;
//# sourceMappingURL=index.js.map