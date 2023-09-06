const BudgetUnits = require('../Database/Models/BudgetUnits');

function addOperationAndUnit(knex, newUnitName) {
    BudgetUnits.addUnit(knex, newUnitName);
}

module.exports = {
    addOperationAndUnit
}
