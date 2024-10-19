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
        setCategories: (state, action) => ({ ...state, spendingCategories: action.payload })
    }
});

export const { setDistributionTypes, setCategories } = dataSlice.actions;
export default dataSlice.reducer;
