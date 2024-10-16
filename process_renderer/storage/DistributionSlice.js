import { createSlice } from "@reduxjs/toolkit";

const distributionSlice = createSlice({
    name: 'distributionFinances',
    initialState: [],
    reducers: {
        setDistributionTypes: (state, action) => action.payload
    }
});

export const { setDistributionTypes } = distributionSlice.actions;
export default distributionSlice.reducer;
