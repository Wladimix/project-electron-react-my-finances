import DistributionService from "../DistributionService";

import { checkAmount, showNotification } from "../../lib/utils";
import { dataState, setNotes } from "../../storage/dataSlice";
import { Dispatch, ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { setTransactionLoader } from "../../storage/transactionSlice";
import { setTransactions } from "../../storage/dataSlice";
import { NOT_DEFINE } from "../../constants";
import { setDates } from "../../storage/dateSlice";

export default class TransactionService {

    private dispatch;

    constructor(dispatch: ThunkDispatch<{ data: dataState }, undefined, UnknownAction> & Dispatch<UnknownAction>) {
        this.dispatch = dispatch;
    };

    async loadTransactions(date: DateDTO): Promise<void> {
        this.dispatch(setTransactionLoader(true));

        const dates = await window.electron.getAllTransactionDates();
        showNotification(dates, { onlyErrorChecking: true });
        this.dispatch(setDates(dates.data));

        const transactions = await window.electron.getAllTransactions(date);
        showNotification(transactions, { onlyErrorChecking: true });
        this.dispatch(setTransactions(transactions.data));
        this.dispatch(setTransactionLoader(false));
    };

    async addTransaction(transaction: AddTransactionDTO, date: DateDTO): Promise<void> {
        const resultAdding = await window.electron.addTransaction(transaction);
        showNotification(resultAdding);

        await this.loadTransactions(date);
        await new DistributionService(this.dispatch).loadDistributionTypes();

        this.dispatch(setNotes([]));
    };

    async editTransaction(id: number, transaction: AddTransactionDTO, date: DateDTO): Promise<void> {
        const resultEditing = await window.electron.editTransaction({ id, ...transaction });
        showNotification(resultEditing);

        await this.loadTransactions(date);
        await new DistributionService(this.dispatch).loadDistributionTypes();

        this.dispatch(setNotes([]));
    };

    async deleteTransaction(transaction: DeleteTransactionDTO, date: DateDTO) {
        const resultdeleting = await window.electron.deleteTransaction(transaction);
        showNotification(resultdeleting);

        await this.loadTransactions(date);
        await new DistributionService(this.dispatch).loadDistributionTypes();

        this.dispatch(setNotes([]));
    };

    checkTransaction(transaction: AddTransactionDTO): boolean {
        return checkAmount(transaction.amount) && transaction.transactionType !== NOT_DEFINE;
    };

};
