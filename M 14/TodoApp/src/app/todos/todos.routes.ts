
import express, { Application, Request, Response } from "express";

// @ts-ignore\
import { getAllTodos } from "../../lib/utils.js";
import path from "path";
import fs from "fs";

 const todosRouter = express.Router()

const todo = JSON.parse(getAllTodos());
const todoPath = path.join(__dirname, "..", "db", "todo.json");

// home route
todosRouter.get("/", (req: Request, res: Response) => {
  res.send("Asalamualikum Brother!!");
});

todosRouter.get("/todos", (req: Request, res: Response) => {
  res.json(todo);
});

todosRouter.post("/todo/create-todo", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log(title, body);

  const newTodo = {
    title,
    body,
    createdAt: new Date(),
  };

  todo.push(newTodo);

  res.json(newTodo);
});

todosRouter.patch(
  "/todo/update/:title",
  async (req: Request, res: Response) => {
    const { title } = req.params;
    const indexOfItem = todo.findIndex(
      (s_todo: { title: string }) => s_todo.title == title
    );

    if (indexOfItem === -1) {
      res.status(404).json({ message: "Todo not found" });
      return;
    }

    const filterTodo = todo[indexOfItem];
    filterTodo.title = req.body.title || filterTodo.title;
    filterTodo.body = req.body.body || filterTodo.body;
    filterTodo.createdAt = req.body ? new Date() : filterTodo.createdAt;
    try {
      fs.writeFileSync(todoPath, JSON.stringify(todo, null, 2), {
        encoding: "utf-8",
      });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Failed to write updated todo to file", error: err });
      return;
    }
    res.json(filterTodo);
  }
);

todosRouter.delete(
  "/todo/delete/:title",
  async (req: Request, res: Response) => {
    const { title } = req.params;
    const indexOfItem = todo.findIndex(
      (s_todo: { title: string }) => s_todo.title == title
    );

    if (indexOfItem === -1) {
      res.status(404).json({ message: "Todo not found" });
      return;
    }
    todo.splice(indexOfItem, 1);

    try {
      fs.writeFileSync(todoPath, JSON.stringify(todo, null, 2), {
        encoding: "utf-8",
      });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Failed to write updated todo to file", error: err });
      return;
    }
    res.send(`${title} deleted`);
  }
);















 export default todosRouter