const BudgetUnits = require('../Database/Models/BudgetUnits');

function addOperationAndUnit(knex) {
    BudgetUnits.addUnit(knex);
}

module.exports = {
    addOperationAndUnit
}
