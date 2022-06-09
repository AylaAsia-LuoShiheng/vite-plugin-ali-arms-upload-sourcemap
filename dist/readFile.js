const fs = require("fs");
let file = "";
fs.readFile(__dirname + "/index.c2fe7bfa.js.map", (err, buff) => {
    if (err) {
        console.log(err, 123);
        return;
    }
    file = buff.toString();
    // Client.main(process.argv.slice(2));
});
//# sourceMappingURL=readFile.js.map