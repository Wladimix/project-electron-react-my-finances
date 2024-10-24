import { createSlice } from "@reduxjs/toolkit";

import { FINANCIAL_INCOME, FINANCIAL_TRANSFER, FINANCIAL_EXPENCE, TYPE_NOT_DEFINE } from "@renderer/RendererConstants.js";

const determineTransactionType = transactionData => {
    const income = transactionData.sourceOfTransactionId === 1
        && transactionData.transactionAddressId !== 1
        && transactionData.spendingCategoryId === 1;

    const transfer = transactionData.sourceOfTransactionId !== 1
        && transactionData.transactionAddressId !== 1
        && transactionData.spendingCategoryId === 1;

    const expence = transactionData.sourceOfTransactionId !== 1
        && transactionData.transactionAddressId === 1
        && transactionData.spendingCategoryId !== 1;

    return {
        ...transactionData,
        transactionType: income ? FINANCIAL_INCOME : transfer ? FINANCIAL_TRANSFER : expence ? FINANCIAL_EXPENCE : TYPE_NOT_DEFINE
    };
};

const transactionSlice = createSlice({
    name: 'transactionData',
    initialState: {
        eventType: "",
        data: {}
    },
    reducers: {
        setEventType: (state, action) => ({ ...state, eventType: action.payload }),
        setData: (state, action) => ({ ...state, data: determineTransactionType(action.payload) })
    }
});

export const { setEventType, setData } = transactionSlice.actions;
export default transactionSlice.reducer;
