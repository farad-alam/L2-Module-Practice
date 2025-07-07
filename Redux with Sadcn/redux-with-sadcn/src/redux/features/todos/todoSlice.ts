import type { RootState } from "@/redux/store";
import type { DraftTask, ITask } from "@/types/type";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface IinitilizeTodo {
  task: ITask[];
}

const initialState: IinitilizeTodo = {
  task: [
    {
      id: "1",
      title: "learn redux",
      description: "learn reduxquickly",
      priority: "high",
      dueDate: new Date("2025-06-30"),
      createdAt: new Date(),
    },
    {
      id: "2",
      title: "learn JavaScript",
      description: "learn JavaScript",
      priority: "medium",
      dueDate: new Date("2025-06-30"),
      createdAt: new Date(),
    },
    {
      id: "3",
      title: "learn Python",
      description: "learn Python",
      priority: "low",
      dueDate: new Date("2025-06-30"),
      createdAt: new Date(),
    },
    {
      id: "4",
      title: "learn Next",
      description: "learn Next quickly",
      priority: "high",
      dueDate: new Date("2025-06-30"),
      createdAt: new Date(),
    },
  ],
};

//
const createSanitizeTask = (draftTask: DraftTask) => {
  return {
    id: nanoid(),
    createdAt: new Date(),
    updatedAt: new Date(),
    ...draftTask,
  };
};

const todoSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ task: DraftTask }>) => {
      const finalTask = createSanitizeTask(action.payload.task);
      state.task.push(finalTask);
    },
    updateTask: (
      state,
      action: PayloadAction<{ id: string; updatedTask: Partial<ITask> }>
    ) => {
      const { id, updatedTask } = action.payload;
      const index = state.task.findIndex((task) => task.id === id);
      if (index !== -1) {
        state.task[index] = {
          ...state.task[index],
          ...updatedTask,
          updatedAt: new Date(),
        };
      }
    },
    deleteTask: (state, action: PayloadAction<{ id: string }>) => {
      state.task = state.task.filter((todo) => todo.id != action.payload.id);
    },
  },
});

export const selectTask = (state: RootState) => {
  return state.todos.task;
};

export const { addTask, updateTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
