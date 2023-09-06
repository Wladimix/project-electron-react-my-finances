const BudgetUnits = require('../Database/Models/BudgetUnits');

function addOperationAndUnit(knex, newUnitName) {
    BudgetUnits.checkAvailabilityOfUnitAndReturnId(knex, newUnitName).then((result) => {
        if (result === undefined) BudgetUnits.addUnit(knex, newUnitName);
    });
}

module.exports = {
    addOperationAndUnit
}
