"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
function testReadDir() {
    const fileList = (0, utils_1.readDir)(__dirname);
    if (fileList.includes("utils.spec.js")) {
        console.log("pass");
    }
    else {
        console.log("fail: utils=>readDir");
    }
}
function testReadFile() {
    const file = (0, utils_1.readFile)(__dirname + "/utils.spec.js");
    if (file.includes("testReadFile")) {
        console.log("pass");
    }
    else {
        console.log("fail: utils=>readFile");
    }
}
function default_1() {
    testReadDir();
    testReadFile();
}
exports.default = default_1;
//# sourceMappingURL=utils.spec.js.map