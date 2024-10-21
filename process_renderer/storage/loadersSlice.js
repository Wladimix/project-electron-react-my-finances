import { createSlice } from "@reduxjs/toolkit";

const setStateObject = keyStateObject => (
    (state, action) => ({ ...state, [keyStateObject]: action.payload })
);

const loadersSlice = createSlice({
    name: 'loaders',
    initialState: {

        addingDistributionFinancesLoader: false,
        editingDistributionFinancesLoader: false,

        addingSpendingCategoryLoader: false,
        editingSpendingCategoryLoader: false,

        transactionsLoader: false,
        addingTransactionLoader: false,
        editingTransactionLoader: false,

    },
    reducers: {

        setAddingDistributionLoader: setStateObject("addingDistributionFinancesLoader"),
        setEditingDistributionLoader: (state, action) => ({ ...state, editingDistributionFinancesLoader: action.payload }),

        setAddingCategoryLoader: (state, action) => ({ ...state, addingSpendingCategoryLoader: action.payload }),
        setEditingCategoryLoader: (state, action) => ({ ...state, editingSpendingCategoryLoader: action.payload }),

        setTransactionsLoader: (state, action) => ({ ...state, transactionsLoader: action.payload }),
        setAddingTransactionLoader: (state, action) => ({ ...state, addingTransactionLoader: action.payload }),
        setEditingTransactionLoader: (state, action) => ({ ...state, editingTransactionLoader: action.payload })

    }
});

export const {

    setAddingDistributionLoader,
    setEditingDistributionLoader,

    setAddingCategoryLoader,
    setEditingCategoryLoader,

    setTransactionsLoader,
    setAddingTransactionLoader,
    setEditingTransactionLoader

} = loadersSlice.actions;

export default loadersSlice.reducer;
