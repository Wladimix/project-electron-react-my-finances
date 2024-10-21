import Services from "@renderer/services/Services.js";

import { setTransactions } from "@renderer/storage/dataSlice.js";
import { setAddingTransactionLoader } from "@renderer/storage/loadersSlice.js";

export default class TransactionService extends Services {

    async addTransaction(data) {
        this.dispatch(setAddingTransactionLoader(true));

        const resultAdding = await electron.addTransaction(data);
        this.showNotification(resultAdding);

        const allTransactions = await electron.getAllTransactions();
        this.showNotification(allTransactions, true);

        this.dispatch(setTransactions(allTransactions.data));
        this.dispatch(setAddingTransactionLoader(false));
    };

};
