import { createSlice } from "@reduxjs/toolkit";

const loadersSlice = createSlice({
    name: 'loaders',
    initialState: {
        distributionFinancesLoader: false
    },
    reducers: {
        setDistributionLoader: (state, action) => ({ ...state, distributionFinancesLoader: action.payload })
    }
});

export const { setDistributionLoader } = loadersSlice.actions;
export default loadersSlice.reducer;
