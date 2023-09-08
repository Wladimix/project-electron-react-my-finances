const knex = require('../Database/ConnectionDB');
const DistributionFinances = require('../Database/Models/DistributionFinances');
const ExpensesCategories = require('../Database/Models/ExpensesCategories');
const BudgetUnits = require('../Database/Models/BudgetUnits');
const BudgetOperations = require('../Database/Models/BudgetOperations');
const WorkingWithFiles = require('../Functions/WorkingWithFiles');

function createTables() {
    if (!WorkingWithFiles.checkForFileAvailability()) {
        DistributionFinances.createTable(knex);
        ExpensesCategories.createTable(knex);
        BudgetUnits.createTable(knex);
        BudgetOperations.createTable(knex);
    };
}

module.exports = {
    createTables
}
