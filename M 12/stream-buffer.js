const fs = require("fs");

// fs.readFile("./file1.txt", { encoding: "utf-8" }, (readErr, data) => {
//   if (readErr) {
//     console.error("Error reading file1.txt:", readErr.message);
//     return;
//   }

//   fs.writeFile("./file2.txt", data, { encoding: "utf-8" }, (writeErr) => {
//     if (writeErr) {
//       console.error("Error writing to file2.txt:", writeErr.message);
//       return;
//     }

//     console.log("Successfully copied content from file1.txt to file2.txt");
//   });
// });

const readStrem = fs.createReadStream("./file1.txt", { encoding: "utf-8" });
const writeStrem = fs.createWriteStream("./file2.txt", { encoding: "utf-8" });

readStrem.on("data", (data) => {
  console.log(data);
  writeStrem.write(data, (err) => {
    if (err) {
      throw new Error("Some Error on write");
    }
  });
});


readStrem.on("error",()=>{
    console.log("Error on read");
})

readStrem.on("end",()=>{
    console.log("Write strem End");
    writeStrem.end()
})

writeStrem.on("finish",()=>{
    console.log("Write strem finish");
})
