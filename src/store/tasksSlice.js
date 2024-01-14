import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = { ...action.payload, id: uuidv4() };
      state.push(newTask);
    },
    editTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      return state.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      );
    },
    deleteTask: (state, action) => {
      const taskId = action.payload;
      return state.filter((task) => task.id !== taskId);
    },
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
