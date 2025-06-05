"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// @ts-ignore\
const utils_js_1 = require("./lib/utils.js");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// create express app
const app = (0, express_1.default)();
app.use(express_1.default.json());
const todo = JSON.parse((0, utils_js_1.getAllTodos)());
const todoPath = path_1.default.join(__dirname, "..", "db", "todo.json");
// home route
app.get("/", (req, res) => {
    res.send("Asalamualikum Brother!!");
});
app.get("/todos", (req, res) => {
    res.json(todo);
});
app.post("/todo/create-todo", (req, res) => {
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
app.patch("/todo/update/:title", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title } = req.params;
    const indexOfItem = todo.findIndex((s_todo) => s_todo.title == title);
    if (indexOfItem === -1) {
        res.status(404).json({ message: "Todo not found" });
        return;
    }
    const filterTodo = todo[indexOfItem];
    filterTodo.title = req.body.title || filterTodo.title;
    filterTodo.body = req.body.body || filterTodo.body;
    filterTodo.createdAt = req.body ? new Date() : filterTodo.createdAt;
    try {
        fs_1.default.writeFileSync(todoPath, JSON.stringify(todo, null, 2), {
            encoding: "utf-8",
        });
    }
    catch (err) {
        res
            .status(500)
            .json({ message: "Failed to write updated todo to file", error: err });
        return;
    }
    res.json(filterTodo);
}));
app.delete("/todo/delete/:title", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title } = req.params;
    const indexOfItem = todo.findIndex((s_todo) => s_todo.title == title);
    if (indexOfItem === -1) {
        res.status(404).json({ message: "Todo not found" });
        return;
    }
    todo.splice(indexOfItem, 1);
    try {
        fs_1.default.writeFileSync(todoPath, JSON.stringify(todo, null, 2), {
            encoding: "utf-8",
        });
    }
    catch (err) {
        res
            .status(500)
            .json({ message: "Failed to write updated todo to file", error: err });
        return;
    }
    res.send(`${title} deleted`);
}));
exports.default = app;
