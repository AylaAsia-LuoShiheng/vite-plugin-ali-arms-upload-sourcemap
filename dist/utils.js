"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFile = exports.readDir = void 0;
const fs = require("fs");
// 读文件夹
function readDir(dirPath) {
    try {
        return fs.readdirSync(dirPath);
    }
    catch (err) {
        console.log(err);
    }
}
exports.readDir = readDir;
// 读文件
function readFile(filePath) {
    try {
        const buff = fs.readFileSync(filePath);
        return buff.toString();
    }
    catch (err) {
        console.log(err);
    }
}
exports.readFile = readFile;
//# sourceMappingURL=utils.js.map