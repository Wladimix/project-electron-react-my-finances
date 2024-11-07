import CategoryModel from "../SpendingCategory/CategoryModel";
import DistributionModel from "../DustributionFinances/DustributionModel";
import fs from "fs";
import NoteModel from "../Note/NoteModel";
import TransactionModel from "../Transaction/TransactionModel";

import { DATABASE_PATH, TablesNames } from "../constants";

class StartService {

    async createTablesIfNotExist() {
        if (!fs.existsSync(DATABASE_PATH)) {

            await DistributionModel.createTable();
            console.info(`Таблица "${TablesNames.DISTRIBUTION_OF_FINANCES_TABLE_NAME}" создана`);

            await CategoryModel.createTable();
            console.info(`Таблица "${TablesNames.SPENDING_CATEGORIES_TABLE_NAME}" создана`);

            await TransactionModel.createTable();
            console.info(`Таблица "${TablesNames.FINANCIAL_TRANSACTIONS_TABLE_NAME}" создана`);

            await NoteModel.createTable();
            console.info(`Таблица "${TablesNames.NOTES_TABLE}" создана`);

            // await addDefaultDistribution({ name: "тип не выбран", amount: 0 });
            // await addDefaultCategory({ name: "категория не выбрана" });
            // await addDefaultNote({ note: NOTE_MISSING });
            // console.info("Созданы значения по умолчанию");

        };
    };

};

export default new StartService();
