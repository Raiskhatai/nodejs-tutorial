// file handling.
// fs module meand file system module read and write file .

const fs = require("fs");

// this is synchronus return value in use variable
// let getVal=fs.writeFileSync(".test.txt", "hello world");

// this is asynchronus call back expect
// fs.writeFile(".test.txt", "hello world asyc", (err) => {});

// read file sync isme return value ko variable mey in kar sakte hey .
// const result = fs.readFileSync("context.txt", "utf-8");

// async file read not return
// fs.readFile("./context.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("error", err);
//   } else {
//     console.log(result);
//   }
// });

// append dosent delete previus data
// let getVal = fs.appendFileSync(".test.txt", "\n hello there\n");

console.log("1");
// non - blocking
fs.readFile("context.txt", "utf-8", (err, result) => {
  console.log(result);
});

console.log("2");
