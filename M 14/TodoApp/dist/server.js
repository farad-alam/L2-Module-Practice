"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
let server;
const port = 5000;
const bootstrap = () => {
    server = app_1.default.listen(port, () => {
        console.log("Brother server is listening on port 5000 😍");
    });
    // console.log(server);
};
bootstrap();
