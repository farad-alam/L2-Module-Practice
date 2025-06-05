"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// @ts-ignore\
const utils_js_1 = require("./lib/utils.js");
// create express app
const app = (0, express_1.default)();
app.use(express_1.default.json());
const todo = JSON.parse((0, utils_js_1.getAllTodos)());
// home route
app.get('/', (req, res) => {
    res.send("Asalamualikum Brother!!");
});
app.get('/todos', (req, res) => {
    res.json(todo);
});
app.post("/todo/create-todo", (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    const newTodo = {
        title,
        body,
        createdAt: new Date()
    };
    todo.push(newTodo);
    res.json(newTodo);
});
app.patch("/todo/update/:id", (req, res) => {
    res.send("Update todos");
});
app.delete("/todo/delete/:id", (req, res) => {
    res.send("delete todos");
});
exports.default = app;
