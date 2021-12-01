const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/subfolder/text.txt", "utf8");
const second = readFileSync("./content/text2.txt", "utf8");

writeFileSync(
    "./content/result.txt",
    `This is the result: ${first},${second}`, { flag: "a" }
);

console.log("done with the task,next one starting");