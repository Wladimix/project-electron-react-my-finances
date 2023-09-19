const Constants = require("../Constants.js");
const knex = require("../ConnectionDB.js");
const WorkingWithFiles = require("../SupportFunctions/WorkingWithFiles.js");
const DistributionFinancesModel = require("../1_Models/DistributionFinancesModel.js");
const DistributionFinancesProcessing = require("../2_ProcessingQueryResults/DistributionFinancesProcessing.js");
const ExpensesCategoriesModel = require("../1_Models/ExpensesCategoriesModel.js");
const ExpensesCategoriesProcessing = require("../2_ProcessingQueryResults/ExpensesCategoriesProcessing.js");

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
