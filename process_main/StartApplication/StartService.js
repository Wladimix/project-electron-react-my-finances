const fs = require("fs");

const { createTable: createCategoriesTable, add: addDefaultCategory } = require("@main/SpendingCategory/CategoryModel.js");
const { createTable: createDistributionTable, add: addDefaultDistribution } = require("@main/DistributionFinances/DistributionModel.js");
const { createTable: createNotesTable, add: addDefaultNote } = require("@main/Note/NoteModel.js");
const { createTable: createTransactionsTable } = require("@main/Transaction/TransactionModel.js");
const { DATABASE_PATH, DISTRIBUTION_OF_FINANCES_TABLE_NAME, FINANCIAL_TRANSACTIONS_TABLE_NAME, NOTES_TABLE, NOTE_MISSING, SPENDING_CATEGORIES_TABLE_NAME } = require("@main/MainConstants.js");

class StartService {

    async createTablesIfNotExist() {
        if (!fs.existsSync(DATABASE_PATH)) {

            await createDistributionTable();
            console.info(`Таблица "${DISTRIBUTION_OF_FINANCES_TABLE_NAME}" создана`);

            await createCategoriesTable();
            console.info(`Таблица "${SPENDING_CATEGORIES_TABLE_NAME}" создана`);

            await createTransactionsTable();
            console.info(`Таблица "${FINANCIAL_TRANSACTIONS_TABLE_NAME}" создана`);

            await createNotesTable();
            console.info(`Таблица "${NOTES_TABLE}" создана`);

            await addDefaultDistribution({ name: "тип не выбран", amount: 0 });
            await addDefaultCategory({ name: "категория не выбрана" });
            await addDefaultNote({ note: NOTE_MISSING });
            console.info("Созданы значения по умолчанию");

        };
    };

};

module.exports = new StartService();
