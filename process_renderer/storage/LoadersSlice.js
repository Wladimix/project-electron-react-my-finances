import { createSlice } from "@reduxjs/toolkit";

const loadersSlice = createSlice({
    name: 'loaders',
    initialState: {
        addingDistributionFinancesLoader: false,
        editingDistributionFinancesLoader: false
    },
    reducers: {
        setAddingDistributionLoader: (state, action) => ({ ...state, addingDistributionFinancesLoader: action.payload }),
        setEditingDistributionLoader: (state, action) => ({ ...state, editingDistributionFinancesLoader: action.payload })
    }
});

export const { setAddingDistributionLoader, setEditingDistributionLoader } = loadersSlice.actions;
export default loadersSlice.reducer;
