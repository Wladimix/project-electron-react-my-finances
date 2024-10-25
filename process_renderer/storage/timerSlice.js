import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
    name: "timer",
    initialState: "",
    reducers: { setTimer: (state, action) => action.payload }
});

export const { setTimer } = timerSlice.actions;

export default timerSlice.reducer;
