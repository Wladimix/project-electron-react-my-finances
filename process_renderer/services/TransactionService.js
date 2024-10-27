import Services from "@renderer/services/Services.js";

import { ADD_TRANSACTION_EVENT_TYPE, DISTRIBUTION_MODIFIER_ID, EDIT_TRANSACTION_EVENT_TYPE, FINANCIAL_INCOME, FINANCIAL_TRANSFER, FINANCIAL_EXPENCE, NOTE_MISSING, PRICE_MONITORING, SPENDING_CATEGORY_MODIFIER_ID, TYPE_NOT_DEFINE } from "@renderer/RendererConstants.js";
import { setAddingTransactionLoader, setEditingTransactionLoader } from "@renderer/storage/loadersSlice.js";
import { setData as setTransactionData } from "@renderer/storage/transactionSlice.js";
import { setEventType } from "@renderer/storage/transactionSlice.js";
import { setTransactions, setNotes } from "@renderer/storage/dataSlice.js";

export default class TransactionService extends Services {

    constructor(dispatch, transactionData = {}) {
        super(dispatch);
        this.transactionData = transactionData;
    };

    async addTransaction() {
        // NOTE: добавление в БД
        console.log("addData")
        console.log(this.transactionData)

        this.dispatch(setAddingTransactionLoader(true));

        const resultAdding = await electron.addTransaction(this.transactionData);
        this.showNotification(resultAdding);

        const allTransactions = await electron.getAllTransactions();
        this.showNotification(allTransactions, true);

        this.dispatch(setTransactions(allTransactions.data));
        this.dispatch(setNotes([]));
        this.dispatch(setAddingTransactionLoader(false));
    };

    async editTransaction() {
        // NOTE: редактирование в БД
        console.log("editData")
        console.log(this.transactionData)

        this.dispatch(setEditingTransactionLoader(this.transactionData.id));

        const resultEditing = await electron.editTransaction(this.transactionData);
        this.showNotification(resultEditing);

        const allTransactions = await electron.getAllTransactions();
        this.showNotification(allTransactions, true);

        this.dispatch(setTransactions(allTransactions.data));
        this.dispatch(setNotes([]));
        this.dispatch(setEditingTransactionLoader(false));
    };

    async deleteTransaction() {
        this.dispatch(setEditingTransactionLoader(this.transactionData.id));

        const resultDeleting = await electron.deleteTransaction(this.transactionData);
        this.showNotification(resultDeleting);

        const allTransactions = await electron.getAllTransactions();
        this.showNotification(allTransactions, true);

        this.dispatch(setTransactions(allTransactions.data));
        this.dispatch(setNotes([]));
        this.dispatch(setEditingTransactionLoader(false));
    };

    writeTransactionData(transactionEventType, initialValues = {}) {
        const transactionData = this.#makeInitialValues(initialValues);

        // NOTE: запись в стор
        console.log("writeData")
        console.log(transactionData)

        if (transactionEventType === ADD_TRANSACTION_EVENT_TYPE) {
            this.dispatch(setEventType(ADD_TRANSACTION_EVENT_TYPE));
        };

        if (transactionEventType === EDIT_TRANSACTION_EVENT_TYPE) {
            this.dispatch(setEventType(EDIT_TRANSACTION_EVENT_TYPE));
        };

        this.dispatch(setTransactionData(transactionData));

    };

    #makeInitialValues(initialValues) {
        return Object.keys(initialValues).reduce((acc, curr) => (
            { ...acc, date: new Date(), [curr]: acc[curr] ?? initialValues[curr] }
        ), this.transactionData);
    };

    changeTransactionDataStorage(data) {
        this.dispatch(setTransactionData(data));
    };

    makeTransactionParamsToShow() {
        const date = this.makeDate(this.transactionData.date);
        const sourceOfTransaction = this.transactionData.sourceOfTransactionId !== 1 ? this.transactionData.sourceOfTransactionName : "-";
        const addressOrCategory = this.#identifyAddressOrCategoryToShow(this.transactionData.transactionAddressId, this.transactionData.spendingCategoryId );
        const note = this.transactionData.note === NOTE_MISSING ? "-" : this.transactionData.note;
        const amount = this.transactionData.amount;

        const amountClasses = {
            [FINANCIAL_INCOME]: "uk-text-large uk-text-bold uk-text-success",
            [FINANCIAL_TRANSFER]: "uk-text-large uk-text-bold uk-text-warning",
            [FINANCIAL_EXPENCE]: "uk-text-large uk-text-bold uk-text-danger",
            [PRICE_MONITORING]: "uk-text-large uk-text-bold",
            [TYPE_NOT_DEFINE]: "uk-text-large uk-text-bold",
        };

        const deletedParamsRegular = /\(удалено.+\)/g;

        const sourceOfTransactionClass = deletedParamsRegular.test(sourceOfTransaction) ? "uk-text-danger" : "";
        const addressOrCategoryClass = deletedParamsRegular.test(addressOrCategory) ? "uk-text-danger" : "";
        const amountClass = amountClasses[this.transactionData.transactionType];

        const thereDeletedParameters = deletedParamsRegular.test(sourceOfTransaction) || deletedParamsRegular.test(addressOrCategory) ? true : false;

        return {
            data: {
                date,
                sourceOfTransaction: sourceOfTransaction.replace(deletedParamsRegular, ""),
                addressOrCategory: addressOrCategory.replace(deletedParamsRegular, ""),
                note,
                amount
            },
            classes: {
                sourceOfTransaction: sourceOfTransactionClass,
                addressOrCategory: addressOrCategoryClass,
                amount: amountClass
            },
            thereDeletedParameters
        };
    };

    #identifyAddressOrCategoryToShow(transactionAddressId, spendingCategoryId) {

        if (transactionAddressId === 1 && spendingCategoryId === 1) {
            return "-";
        };

        if (transactionAddressId !== 1 && spendingCategoryId === 1) {
            return this.transactionData.transactionAddressName;
        };

        if (transactionAddressId === 1 && spendingCategoryId !== 1) {
            return this.transactionData.spendingCategoryName;
        };

    };

    identifyAddressOrCategoryToSend(valueToSend) {
        const transactionAddressId = valueToSend.includes(DISTRIBUTION_MODIFIER_ID) ? this.#clearId(valueToSend) : 1;
        const spendingCategoryId = valueToSend.includes(SPENDING_CATEGORY_MODIFIER_ID) ? this.#clearId(valueToSend) : 1;
        return { ...this.transactionData, transactionAddressId, spendingCategoryId };
    };

    #clearId(id) {
        return +id.replace(/^\D+/g, "");
    };

    checkTransaction(transactionData) {
        return this.checkAmount(transactionData.amount) && transactionData.transactionType !== TYPE_NOT_DEFINE;
    };

};
