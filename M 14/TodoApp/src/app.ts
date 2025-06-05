import express, { Application, Request, Response } from 'express'
// @ts-ignore\
import {getAllTodos} from "./lib/utils.js";
import { json } from 'stream/consumers';
// create express app
const app : Application = express()

app.use(express.json())

const todo = JSON.parse(getAllTodos());

// home route
app.get('/', (req : Request, res : Response)=>{
    res.send("Asalamualikum Brother!!")
})

app.get('/todos', (req : Request, res : Response)=>{
    res.json(todo)
})

app.post("/todo/create-todo", (req: Request, res: Response) => {
    const {title, body} = req.body
    console.log(title, body);

    const newTodo = {
      title,
      body,
      createdAt: new Date()
    };

    todo.push(newTodo)

    res.json(newTodo);
});

app.patch("/todo/update/:id", (req: Request, res: Response) => {
  res.send("Update todos");
});

app.delete("/todo/delete/:id", (req: Request, res: Response) => {
  res.send("delete todos");
});






export default app