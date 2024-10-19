import { createSlice } from "@reduxjs/toolkit";

const loadersSlice = createSlice({
    name: 'loaders',
    initialState: {

        addingDistributionFinancesLoader: false,
        editingDistributionFinancesLoader: false,

        addingSpendingCategoryLoader: false,
        editingSpendingCategoryLoader: false

    },
    reducers: {

        setAddingDistributionLoader: (state, action) => ({ ...state, addingDistributionFinancesLoader: action.payload }),
        setEditingDistributionLoader: (state, action) => ({ ...state, editingDistributionFinancesLoader: action.payload }),

        setAddingCategoryLoader: (state, action) => ({ ...state, addingSpendingCategoryLoader: action.payload }),
        setEditingCategoryLoader: (state, action) => ({ ...state, editingSpendingCategoryLoader: action.payload })

    }
});

export const {

    setAddingDistributionLoader,
    setEditingDistributionLoader,

    setAddingCategoryLoader,
    setEditingCategoryLoader

} = loadersSlice.actions;

export default loadersSlice.reducer;
