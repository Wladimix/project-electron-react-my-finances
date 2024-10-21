const fs = require("fs");

const { createTable: createDistributionTable } = require("@main/DistributionFinances/DistributionModel.js");
const { createTable: createCategoriesTable } = require("@main/SpendingCategory/CategoryModel.js");
const { createTable: createTransactionsTable } = require("@main/Transactions/TransactionModel.js");
const { DATABASE_PATH, DISTRIBUTION_OF_FINANCES_TABLE_NAME, FINANCIAL_TRANSACTIONS_TABLE_NAME, SPENDING_CATEGORIES_TABLE_NAME } = require("@main/MainConstants.js");

class StartService {

    async createTablesIfNotExist() {
        if (!fs.existsSync(DATABASE_PATH)) {

            await createDistributionTable();
            console.log(`Таблица "${DISTRIBUTION_OF_FINANCES_TABLE_NAME}" создана`);

            await createCategoriesTable();
            console.log(`Таблица "${SPENDING_CATEGORIES_TABLE_NAME}" создана`);

            await createTransactionsTable();
            console.log(`Таблица "${FINANCIAL_TRANSACTIONS_TABLE_NAME}" создана`);

        }
    };

};

module.exports = new StartService();
