import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        distributionFinancesTypes: [],
        spendingCategories: [],
        transactions: []
    },
    reducers: {
        setDistributionTypes: (state, action) => ({ ...state, distributionFinancesTypes: action.payload }),
        setCategories: (state, action) => ({ ...state, spendingCategories: action.payload }),
        setTransactions: (state, action) => ({ ...state, transactions: action.payload })
    }
});

export const { setCategories, setDistributionTypes, setTransactions } = dataSlice.actions;
export default dataSlice.reducer;
