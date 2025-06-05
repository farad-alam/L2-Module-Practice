"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTodos = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getAllTodos = () => {
    const todoPath = path_1.default.join(__dirname, "..", "..", "db", "todo.json");
    let todos;
    todos = fs_1.default.readFileSync(todoPath, { encoding: 'utf-8' });
    return todos;
};
exports.getAllTodos = getAllTodos;
