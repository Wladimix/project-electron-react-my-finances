import CalculationController from "./Calculation/CalculationController";
import CategoryController from "./SpendingCategory/CategoryController";
import CategoryModel from "./SpendingCategory/CategoryModel";
import DistributionController from "./DustributionFinances/DistributionController";
import DistributionModel from "./DustributionFinances/DustributionModel";
import fs from "fs";
import NoteController from "./Note/NoteController";
import NoteModel from "./Note/NoteModel";
import path from 'path';
import seed from "./seed";
import TransactionController from "./Transaction/TransactionController";
import TransactionModel from "./Transaction/TransactionModel";

import { DATABASE_NAME, DATABASE_PATH } from "./connectionDB";
import { TablesNames, VALUE_MISSING } from "./constants";
import { ipcMain } from "electron";

class StartService {

    async createTablesIfNotExist(): Promise<void> {
        try {

            if (!fs.existsSync(DATABASE_PATH)) {
                fs.mkdirSync(DATABASE_PATH);
            };

            if (!fs.existsSync(path.join(DATABASE_PATH + DATABASE_NAME))) {

                await DistributionModel.createTable();
                console.info(`Таблица "${TablesNames.DISTRIBUTION_OF_FINANCES_TABLE_NAME}" создана`);

                await CategoryModel.createTable();
                console.info(`Таблица "${TablesNames.SPENDING_CATEGORIES_TABLE_NAME}" создана`);

                await TransactionModel.createTable();
                console.info(`Таблица "${TablesNames.FINANCIAL_TRANSACTIONS_TABLE_NAME}" создана`);

                await NoteModel.createTable();
                console.info(`Таблица "${TablesNames.NOTES_TABLE}" создана`);

                await DistributionModel.add("тип не выбран", 0);
                await CategoryModel.add("категория не выбрана");
                await NoteModel.add(VALUE_MISSING);
                console.info("Созданы значения по умолчанию");

            };

        } catch (error) {
            console.log("Ошибка при создании таблиц:");
            console.log((error as Error).message);
        }
    };

    createRouter(): void {

        this.ipcHandle("getAllDistributionTypes", DistributionController.getAllDistributionTypes);
        this.ipcHandle("addDistributionType", DistributionController.addDistributionType);
        this.ipcHandle("editDistributionType", DistributionController.editDistributionType);
        this.ipcHandle("deleteDistributionType", DistributionController.deleteDistributionType);

        this.ipcHandle("getAllCategories", CategoryController.getAllCategories);
        this.ipcHandle("addSpendingCategory", CategoryController.addSpendingCategory);
        this.ipcHandle("editSpendingCategory", CategoryController.editSpendingCategory);
        this.ipcHandle("deleteSpendingCategory", CategoryController.deleteSpendingCategory);

        this.ipcHandle("getAllTransactions", TransactionController.getAllTransactions);
        this.ipcHandle("getAllTransactionDates", TransactionController.getAllTransactionDates);
        this.ipcHandle("getNumberOfTransactions", TransactionController.getNumberOfTransactions);
        this.ipcHandle("addTransaction", TransactionController.addTransaction);
        this.ipcHandle("editTransaction", TransactionController.editTransaction);
        this.ipcHandle("deleteTransaction", TransactionController.deleteTransaction);

        this.ipcHandle("getNotes", NoteController.getNotes);

        this.ipcHandle("getCapital", CalculationController.getCapital);
        this.ipcHandle("getTotalAmount", CalculationController.getTotalAmount);
        this.ipcHandle("getStatisticsOnExpenses", CalculationController.getStatisticsOnExpenses);
        this.ipcHandle("getInflationData", CalculationController.getInflationData);

    };


    ipcHandle<Channel extends keyof ElectronApi, Listener extends IController[Channel]>(channel: Channel, listener: Listener): void {
        ipcMain.handle(channel, listener);
    };

    async runSeed() {
        await seed();
    };

};

export default new StartService();
