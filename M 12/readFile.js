const fs = require("fs").promises;
const fscb = require("fs");

// SYNCRONOUS WAY ------------->>>
// const data = fs.readFileSync("./file1.txt",{encoding:'utf-8'})

// console.log(data);

// const writeData = fs.writeFileSync('./file1.txt', 'Olaikum Assalam',{encoding:'utf-8'})

// console.log(writeData);

// ASYNCRONOUS WAY ----------->>>

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


const readData = async () => {
    try {
        
        const finalData = await fs.readFile("./file2.txt", {
          encoding: "utf-8",
        });
        
        console.log("Data read", finalData);
        return { status: 200, finalData };
        
    } catch (error) {
        console.error("SOme Error Ocured")
    }
};

readData().then(result => console.log(result))

fscb.writeFile("./file2.txt", "Salam Boro Vai", async(err) => {
await delay(2000)
  if (err) {
    console.error("error to write file");
  }
  console.log("file writed");
});
