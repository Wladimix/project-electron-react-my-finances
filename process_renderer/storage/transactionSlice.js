import { createSlice } from "@reduxjs/toolkit";

import { FINANCIAL_INCOME, FINANCIAL_TRANSFER, FINANCIAL_EXPENCE, NOTE_MISSING, PRICE_MONITORING, TYPE_NOT_DEFINE } from "@renderer/RendererConstants.js";

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
        && transactionData.spendingCategoryId === 1
        && transactionData.amount;

    const transfer = transactionData.sourceOfTransactionId !== 1
        && transactionData.transactionAddressId !== 1
        && transactionData.sourceOfTransactionId !== transactionData.transactionAddressId
        && transactionData.spendingCategoryId === 1
        && transactionData.amount;

    const expence = transactionData.sourceOfTransactionId !== 1
        && transactionData.transactionAddressId === 1
        && transactionData.spendingCategoryId !== 1
        && transactionData.amount;

    const priceMonitoring = transactionData.sourceOfTransactionId === 1
        && transactionData.transactionAddressId === 1
        && transactionData.spendingCategoryId === 1
        && (transactionData.note && transactionData.note !== " " && transactionData.note !== NOTE_MISSING)
        && transactionData.amount;

    return income ? FINANCIAL_INCOME : transfer ? FINANCIAL_TRANSFER : expence ? FINANCIAL_EXPENCE : priceMonitoring ? PRICE_MONITORING : TYPE_NOT_DEFINE;
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
