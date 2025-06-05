const { time } = require('console');
const http = require('http');
const { json } = require('stream/consumers');

const data = [
    {
        title: "python",
        body:"ml ai",
        createdAT: "10/10/2010"
    }
]

const server = http.createServer((req,res)=>{

    
    if (req.url == "/todos" & req.method == "GET") {
        res.writeHead(200,{
            "content-type": "application/json",
            "sender": "server"
        })
        res.end(JSON.stringify(data))
    } else if(req.url == "/todo/create-todo" & req.method == "POST") {
        res.end("Todo Created")
    } else {
        res.end("Route not found")
    }
    // res.end("Welcome Bro, Its Our Server")
})

server.listen(5000,"127.0.0.1",()=>{
    console.log("Server successfully run on port 500❤️");
})