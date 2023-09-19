const DistributionFinancesModel = require("../1_Models/DistributionFinancesModel.js");
const ExpensesCategoriesModel = require("../1_Models/ExpensesCategoriesModel.js");
const DistributionFinancesProcessing = require("../2_ProcessingQueryResults/DistributionFinancesProcessing.js");
const ExpensesCategoriesProcessing = require("../2_ProcessingQueryResults/ExpensesCategoriesProcessing.js");
const WorkingWithFiles = require("../SupportFunctions/WorkingWithFiles.js");
const knex = require("../ConnectionDB.js");
const Constants = require("../MainConstants.js");

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
