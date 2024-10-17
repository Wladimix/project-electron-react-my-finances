import { createSlice } from "@reduxjs/toolkit";

const distributionSlice = createSlice({
    name: 'data',
    initialState: {
        distributionFinancesTypes: [],
        spendingCategories: [],
        transactions: []
    },
    reducers: {
        setData: (state, action) => ({ ...state, distributionFinancesTypes: action.payload })
    }
});

export const { setData } = distributionSlice.actions;
export default distributionSlice.reducer;
