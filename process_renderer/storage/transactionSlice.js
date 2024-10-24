import { createSlice } from "@reduxjs/toolkit";

import { FINANCIAL_INCOME, FINANCIAL_TRANSFER, FINANCIAL_EXPENCE, NOTE_MISSING, TYPE_NOT_DEFINE } from "@renderer/RendererConstants.js";

const processData = transactionData => {
    return {
        ...transactionData,
        note: processNote(transactionData.note),
        transactionType: determineTransactionType(transactionData)
    };
};

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

    return income ? FINANCIAL_INCOME : transfer ? FINANCIAL_TRANSFER : expence ? FINANCIAL_EXPENCE : TYPE_NOT_DEFINE;


    /* const income = transactionData.sourceOfTransactionId === 1
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
    }; */
};

const processNote = note => {return note === "" || /^\s+$/g.test(note) ? NOTE_MISSING : note};

const transactionSlice = createSlice({
    name: "transactionData",
    initialState: {
        eventType: "",
        data: {}
    },
    reducers: {
        setEventType: (state, action) => ({ ...state, eventType: action.payload }),
        setData: (state, action) => ({ ...state, data: processData(action.payload) })
    }
});

export const { setEventType, setData } = transactionSlice.actions;
export default transactionSlice.reducer;
