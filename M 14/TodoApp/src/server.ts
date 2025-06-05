import app from "./app";

let server;
const port = 5000;

const bootstrap = ()=>{
    server = app.listen(port, () => {
      console.log("Brother server is listening on port 5000 😍");
    });

    // console.log(server);
}

bootstrap()