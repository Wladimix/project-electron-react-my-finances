import { createSlice } from "@reduxjs/toolkit";

const setStateObject = keyStateObject => (
    (state, action) => ({ ...state, [keyStateObject]: action.payload })
);

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        distributionFinancesTypes: [],
        spendingCategories: [],
        transactions: []
    },
    reducers: {
        setDistributionTypes: setStateObject("distributionFinancesTypes"),
        setCategories: setStateObject("spendingCategories"),
        setTransactions: setStateObject("transactions")
    }
});

export const { setCategories, setDistributionTypes, setTransactions } = dataSlice.actions;
export default dataSlice.reducer;
