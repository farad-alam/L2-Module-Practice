const fs = require("fs");
const path = require('path');

const inputElemt = process.argv.slice(2).join(" ");
console.log(inputElemt);

if (!inputElemt) {
    console.log(`Please Provde some text
Example: node index.js hello brother`);
    process.exit()
}

const filePath = path.join(__dirname, 'log.txt')
const formatedText = `${inputElemt}\n`;

// Append text
fs.appendFile(filePath,formatedText,{encoding:"utf-8"},()=>{
    console.log("Text Append Successfully!");
})


// fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.error("Error occured when try to reas file");
//   }

//   //   WRITE NEW LOG WITH EXISTING TEXT
//   const formatedText = `${data}\n${inputElemt}`;
//   fs.writeFile(filePath, formatedText, { encoding: "utf-8" }, (err) => {
//     if (err) {
//       console.error("Unexpected Error Happen", err);
//     }
//     console.log("log text written successfully");
//   });
// });


