import Services from "@renderer/services/Services.js";

import { ADD_TRANSACTION_EVENT_TYPE, EDIT_TRANSACTION_EVENT_TYPE } from "@renderer/RendererConstants.js";
import { setAddingTransactionLoader, setEditingTransactionLoader } from "@renderer/storage/loadersSlice.js";
import { setData as setTransactionData } from "@renderer/storage/transactionSlice.js";
import { setEventType } from "@renderer/storage/transactionSlice.js";
import { setTransactions } from "@renderer/storage/dataSlice.js";

export default class TransactionService extends Services {

    async addTransaction(data) {
        // NOTE: добавление в БД
        console.log("addData")
        console.log(data)

        this.dispatch(setAddingTransactionLoader(true));

        const resultAdding = await electron.addTransaction(data);
        this.showNotification(resultAdding);

        const allTransactions = await electron.getAllTransactions();
        this.showNotification(allTransactions, true);

        this.dispatch(setTransactions(allTransactions.data));
        this.dispatch(setAddingTransactionLoader(false));
    };

    async editTransaction(data) {
        // NOTE: редактирование в БД
        console.log("editData")
        console.log(data)

        this.dispatch(setEditingTransactionLoader(data.id));

        const resultEditing = await electron.editTransaction(data);
        this.showNotification(resultEditing);

        const allTransactions = await electron.getAllTransactions();
        this.showNotification(allTransactions, true);

        this.dispatch(setTransactions(allTransactions.data));
        this.dispatch(setEditingTransactionLoader(false));
    };

    writeTransactionData(data, transactionEventType) {
        // NOTE: запись в стор
        console.log("writeData")
        console.log(data)

        if (transactionEventType === ADD_TRANSACTION_EVENT_TYPE) {
            this.dispatch(setEventType(ADD_TRANSACTION_EVENT_TYPE));
        };

        if (transactionEventType === EDIT_TRANSACTION_EVENT_TYPE) {
            this.dispatch(setEventType(EDIT_TRANSACTION_EVENT_TYPE));
        };

        this.dispatch(setTransactionData(data));

    };

    changeTransactionDataStorage(data) {
        this.dispatch(setTransactionData(data));
    };

};
