const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/subfolder/text.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const firstTxt = result;
    readFile("./content/text2.txt", "utf8", (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            "./content/result-async.txt",
            `here is the result: ${firstTxt},${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log("we are done!");
            }
        );
    });
});
console.log("starting next task");