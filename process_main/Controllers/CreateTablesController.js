const Constants = require("../Constants.js");
const knex = require("../Database/ConnectionDB.js");
const WorkingWithFiles = require("../SupportFunctions/WorkingWithFiles.js");
const DistributionFinancesModel = require("../Database/Models/DistributionFinancesModel.js");
const DistributionFinancesProcessing = require("../Database/ProcessingQueryResults/DistributionFinancesProcessing.js");
const ExpensesCategoriesModel = require("../Database/Models/ExpensesCategoriesModel.js");
const ExpensesCategoriesProcessing = require("../Database/ProcessingQueryResults/ExpensesCategoriesProcessing.js");

function createTables() {
    if (!WorkingWithFiles.checkForFileAvailability(Constants.DATABASE_PATH)) {
        let distributionFinancesTablePromise = DistributionFinancesModel.createTable(knex);
        DistributionFinancesProcessing.createTableProcessing(distributionFinancesTablePromise);

        let expensesCategoriesTablePromise = ExpensesCategoriesModel.createTable(knex);
        ExpensesCategoriesProcessing.createTableProcessing(expensesCategoriesTablePromise);
    }
}

module.exports = {
    createTables
}
