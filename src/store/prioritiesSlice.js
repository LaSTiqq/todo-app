import { createSlice } from "@reduxjs/toolkit";

export const prioritiesSlice = createSlice({
  name: "priorities",
  initialState: ["High", "Medium", "Low"],
  reducers: {},
});

export default prioritiesSlice.reducer;
