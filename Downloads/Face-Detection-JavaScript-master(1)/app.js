// //Modules
// const os = require("os");

// //infor abt the user

// const user = os.userInfo();
// console.log(user);

// //system uptime in seconds

// console.log(`the system uptime is ${os.uptime()} seconds`);

// //info abt the system
// const currentOs = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem() / 1000,
// };
// console.log(currentOs);

// ------------------------------------------------------------------------------------------------------------
//Path module

// const path = require("path");

// //actual path
// console.log(path.sep);

// //path fusion
// const filePath = path.join("/content", "subfolder", "text.txt");
// console.log(filePath);

// //path basefile

// const base = path.basename(filePath);
// console.log(base);

// //absolute path to the file(returns the path to some kind of resource in a machine)
// const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
// console.log(absolute);

// -------------------------------------------------------------------------------------------------------------------------------------------------

// the filesystem module- FS

//const { readFileSync, writeFileSync, writeFile } = require("fs");
// const { readFile, writeFile } = require("fs");

// //syncronously
// // const first = readFileSync("./content/subfolder/text.txt", "utf8");
// // const second = readFileSync("./content/text2.txt", "utf8");
// // writeFileSync(
// //     "./content/result.txt",
// //     `This is the result: ${first},${second}`, { flag: "a" }
// // );

// readFile("./content/subfolder/text.txt", "utf8", (err, result) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     const firstTxt = result;
//     readFile("./content/text2.txt", "utf8", (err, result) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         const second = result;
//         writeFile(
//             "./content/result-async.txt",
//             `here is the result: ${firstTxt},${second}`,
//             (err, result) => {
//                 if (err) {
//                     console.log(err);
//                     return;
//                 }
//                 console.log(result);
//             }
//         );
//     });
// });

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Http module

// const http = require("http");

// const server = http.createServer((request, respond) => {
//     if (request.url === "/") {
//         respond.end("welcome to our homepage");
//     }
//     if (request.url === "/about") {
//         respond.end("Here is our short history");
//     }
//     respond.end(`
//     <h1>Oops!</h1>
//     <p>This page does not exist</p>
//     <a href="/">Back Home</a>`);
// });
// server.listen(5000);

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);