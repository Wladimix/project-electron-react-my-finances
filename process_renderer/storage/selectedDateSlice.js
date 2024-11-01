import { createSlice } from "@reduxjs/toolkit";
import { NOT_DEFINE } from "@renderer/RendererConstants.js";

const setStateObject = keyStateObject => (
    (state, action) => ({ ...state, [keyStateObject]: action.payload })
);

const selectedDateSlice = createSlice({
    name: "selectedDate",
    initialState: {
        year: NOT_DEFINE,
        month: NOT_DEFINE
    },
    reducers: {
        selectYear: setStateObject("year"),
        selectMonth: setStateObject("month")
    }
});

export const { selectYear, selectMonth } = selectedDateSlice.actions;
export default selectedDateSlice.reducer;
