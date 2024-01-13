import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import prioritiesReducer from "./prioritiesSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    priorities: prioritiesReducer,
  },
});
