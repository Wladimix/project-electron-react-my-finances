import { createSlice } from "@reduxjs/toolkit";

const setStateObject = keyStateObject => (
    (state, action) => ({ ...state, [keyStateObject]: action.payload })
);

const dataSlice = createSlice({
    name: "data",
    initialState: {
        distributionFinancesTypes: [],
        spendingCategories: [],
        transactions: [],
        notes: [],
        dates: {}
    },
    reducers: {
        setDistributionTypes: setStateObject("distributionFinancesTypes"),
        setCategories: setStateObject("spendingCategories"),
        setTransactions: setStateObject("transactions"),
        setNotes: setStateObject("notes"),
        setDates: setStateObject("dates")
    }
});

export const { setCategories, setDates, setDistributionTypes, setNotes, setTransactions } = dataSlice.actions;
export default dataSlice.reducer;
