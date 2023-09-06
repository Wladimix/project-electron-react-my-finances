const BudgetUnits = require('../Database/Models/BudgetUnits');

function addOperationAndUnit(knex, newUnitName) {
    return BudgetUnits.checkAvailabilityOfUnitAndReturnId(knex, newUnitName).then((result) => {
        if (result === undefined) BudgetUnits.addUnit(knex, newUnitName);
        return result;
    });
}

module.exports = {
    addOperationAndUnit
}
