import { createSlice } from "@reduxjs/toolkit";

const setStateObject = keyStateObject => (
    (state, action) => ({ ...state, [keyStateObject]: action.payload })
);

const transactionSlice = createSlice({
    name: 'transactionData',
    initialState: {
        eventType: "",
        data: {}
    },
    reducers: {
        setEventType: setStateObject("eventType"),
        setData: setStateObject("data")
    }
});

export const { setEventType, setData } = transactionSlice.actions;
export default transactionSlice.reducer;
