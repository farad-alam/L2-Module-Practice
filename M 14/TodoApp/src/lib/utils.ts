import fs from 'fs'
import path from "path";

export const getAllTodos = ()=>{
    const todoPath = path.join(__dirname, "..", "..", "db", "todo.json");
    let todos;
    todos = fs.readFileSync(todoPath, {encoding:'utf-8'})
    return todos
}
