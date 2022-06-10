import { readDir, readFile } from "../utils";

function testReadDir() {
  const fileList = readDir(__dirname);
  if (fileList.includes("utils.spec.js")) {
    console.log("pass");
  } else {
    console.log("fail: utils=>readDir");
  }
}

function testReadFile() {
  const file = readFile(__dirname + "/utils.spec.js");
  if (file.includes("testReadFile")) {
    console.log("pass");
  } else {
    console.log("fail: utils=>readFile");
  }
}

export default function () {
  testReadDir();
  testReadFile();
}
