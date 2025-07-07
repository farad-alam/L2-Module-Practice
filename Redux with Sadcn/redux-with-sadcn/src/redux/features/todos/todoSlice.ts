import type { RootState } from "@/redux/store";
import type { ITask } from "@/types/type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IinitilizeTodo {
  task: ITask[];
}

const initialState: IinitilizeTodo = {
  task: [
    {
      id: 3453,
      title: "learn redux",
      description: "learn reduxquickly",
      priority: "high",
      dueDate: "2025-06-30",
      createdAt: new Date(),
    },
    {
      id: 3453,
      title: "learn JavaScript",
      description: "learn JavaScript",
      priority: "medium",
      dueDate: "2025-06-30",
      createdAt: new Date(),
    },
    {
      id: 3453,
      title: "learn Python",
      description: "learn Python",
      priority: "low",
      dueDate: "2025-06-30",
      createdAt: new Date(),
    },
    {
      id: 3453,
      title: "learn Next",
      description: "learn Next quickly",
      priority: "high",
      dueDate: "2025-06-30",
      createdAt: new Date(),
    },
  ],
};

const todoSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.task.push(action.payload.task);
    },
    updateTask: (state, action: PayloadAction<{ id: number; updatedTask: Partial<ITask>}>) => {
      const { id, updatedTask } = action.payload;
      const index = state.task.findIndex((task) => task.id === id);
      if (index !== -1) {
        state.task[index] = {
          ...state.task[index],
          ...updatedTask,
        };
      }
    },
  },
});

export const selectTask = (state : RootState) => {
    return state.todos.task
}

export const { addTask, updateTask } = todoSlice.actions;
export default todoSlice.reducer;
