import Services from "@renderer/services/Services.js";

import { ADD_TRANSACTION_EVENT_TYPE, DISTRIBUTION_MODIFIER_ID, DELETED_PARAMS_REGULAR, EDIT_TRANSACTION_EVENT_TYPE, FINANCIAL_INCOME, FINANCIAL_TRANSFER, FINANCIAL_EXPENCE, NOTE_MISSING, PRICE_MONITORING, SPENDING_CATEGORY_MODIFIER_ID, NOT_DEFINE } from "@renderer/RendererConstants.js";
import { setAddingTransactionLoader, setEditingTransactionLoader, setTransactionsLoader } from "@renderer/storage/loadersSlice.js";
import { setData as setTransactionData } from "@renderer/storage/transactionSlice.js";
import { setEventType } from "@renderer/storage/transactionSlice.js";
import { setDates, setDistributionTypes, setTransactions, setNotes } from "@renderer/storage/dataSlice.js";

export default class TransactionService extends Services {

    constructor(dispatch, transactionData = {}) {
        super(dispatch);
        this.transactionData = transactionData;
    };

    async loadTransactions(date) {
        this.dispatch(setTransactionsLoader(true));
        const allTransactions = await electron.getAllTransactions(date);
        this.showNotification(allTransactions, true);
        this.dispatch(setTransactions(allTransactions.data));
        this.dispatch(setTransactionsLoader(false));
    };

    async addTransaction(date) {
        // NOTE: добавление в БД
        /* console.log("addData")
        console.log(this.transactionData) */

        this.dispatch(setAddingTransactionLoader(true));

        const resultAdding = await electron.addTransaction(this.transactionData);
        this.showNotification(resultAdding);

        const allDates = await electron.getAllTransactionDates();
        this.showNotification(allDates, true);

        const allTransactions = await electron.getAllTransactions(date);
        this.showNotification(allTransactions, true);

        const allDistributionTypes = await electron.getAllDistributionTypes();
        this.showNotification(allDistributionTypes, true);

        this.dispatch(setDates(allDates.data));
        this.dispatch(setTransactions(allTransactions.data));
        this.dispatch(setNotes([]));
        this.dispatch(setAddingTransactionLoader(false));
        this.dispatch(setDistributionTypes(allDistributionTypes.data));
    };

    async editTransaction(date) {
        // NOTE: редактирование в БД
        /* console.log("editData")
        console.log(this.transactionData) */

        this.dispatch(setEditingTransactionLoader(this.transactionData.id));

        const resultEditing = await electron.editTransaction(this.transactionData);
        this.showNotification(resultEditing);

        const allDates = await electron.getAllTransactionDates();
        this.showNotification(allDates, true);

        const allTransactions = await electron.getAllTransactions(date);
        this.showNotification(allTransactions, true);

        const allDistributionTypes = await electron.getAllDistributionTypes();
        this.showNotification(allDistributionTypes, true);

        this.dispatch(setDates(allDates.data));
        this.dispatch(setTransactions(allTransactions.data));
        this.dispatch(setNotes([]));
        this.dispatch(setEditingTransactionLoader(false));
        this.dispatch(setDistributionTypes(allDistributionTypes.data));
    };

    async deleteTransaction(date) {
        this.dispatch(setEditingTransactionLoader(this.transactionData.id));

        const resultDeleting = await electron.deleteTransaction(this.transactionData);
        this.showNotification(resultDeleting);

        const allDates = await electron.getAllTransactionDates();
        this.showNotification(allDates, true);

        const allTransactions = await electron.getAllTransactions(date);
        this.showNotification(allTransactions, true);

        const allDistributionTypes = await electron.getAllDistributionTypes();
        this.showNotification(allDistributionTypes, true);

        this.dispatch(setDates(allDates.data));
        this.dispatch(setTransactions(allTransactions.data));
        this.dispatch(setNotes([]));
        this.dispatch(setEditingTransactionLoader(false));
        this.dispatch(setDistributionTypes(allDistributionTypes.data));
    };

    writeTransactionData(transactionEventType, initialValues = {}) {
        const transactionData = this.#makeInitialValues(initialValues);

        // NOTE: запись в стор
        /* console.log("writeData")
        console.log(transactionData) */

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
            [NOT_DEFINE]: "uk-text-large uk-text-bold",
        };

        const sourceOfTransactionClass = DELETED_PARAMS_REGULAR.test(sourceOfTransaction) ? "uk-text-danger" : "";
        const addressOrCategoryClass = DELETED_PARAMS_REGULAR.test(addressOrCategory) ? "uk-text-danger" : "";
        const amountClass = amountClasses[this.transactionData.transactionType];

        const thereDeletedParameters = DELETED_PARAMS_REGULAR.test(sourceOfTransaction) || DELETED_PARAMS_REGULAR.test(addressOrCategory) ? true : false;

        return {
            data: {
                date,
                sourceOfTransaction: sourceOfTransaction.replace(DELETED_PARAMS_REGULAR, ""),
                addressOrCategory: addressOrCategory.replace(DELETED_PARAMS_REGULAR, ""),
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
        return this.checkAmount(transactionData.amount) && transactionData.transactionType !== NOT_DEFINE;
    };

};
