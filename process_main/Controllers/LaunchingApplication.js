const knex = require('../Database/ConnectionDB');
const BudgetUnits = require('../Database/Models/BudgetUnits');
const BudgetCategories = require('../Database/Models/BudgetCategories');
const BudgetOperations = require('../Database/Models/BudgetOperations');
const WorkingWithFiles = require('../Controllers/WorkingWithFiles');

function createTables() {
    if (!WorkingWithFiles.checkForFileAvailability()) {
        BudgetUnits.createTable(knex);
        BudgetCategories.createTable(knex);
        BudgetOperations.createTable(knex);
    };
}

module.exports = {
    createTables
}
