"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./core/index"));
function pluginConfig(config) {
    let outDirFinal;
    return {
        name: "vite-plugin-arms-upload-sourcemap",
        apply: "build",
        configResolved(resolvedConfig) {
            // 获取打包文件夹路径
            const { root } = resolvedConfig;
            const { outDir, assetsDir } = resolvedConfig.build;
            outDirFinal = path_1.default.resolve(root, outDir, assetsDir);
        },
        closeBundle() {
            (0, index_1.default)(config, outDirFinal);
        }
    };
}
exports.default = pluginConfig;
//# sourceMappingURL=index.js.map