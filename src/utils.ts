const fs = require("fs");

// 读文件夹
export function readDir(dirPath: string) {
  try {
    return fs.readdirSync(dirPath);
  } catch (err) {
    console.log(err);
  }
}

// 读文件
export function readFile(filePath: string): string {
  try {
    const buff = fs.readFileSync(filePath);
    return buff.toString();
  } catch (err) {
    console.log(err);
  }
}
