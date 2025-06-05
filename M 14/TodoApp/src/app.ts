import express, { Application, Request, Response } from "express";
import todosRouter from "./app/todos/todos.routes";
// @ts-ignore\

// create express app
const app: Application = express();
app.use(express.json());


// Use Routes

app.use("/", todosRouter)












export default app;
