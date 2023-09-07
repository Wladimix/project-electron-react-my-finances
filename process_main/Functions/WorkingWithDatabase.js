const BudgetUnits = require('../Database/Models/BudgetUnits');
const BudgetOperations = require('../Database/Models/BudgetOperations');

function addOperationAndUnit(knex, newUnitName, newOperationSum, firstOperationCategoryId, secondOperationCategoryId) {
    return BudgetUnits.checkAvailabilityOfUnitAndReturnId(knex, newUnitName).then((checkResult) => {
        if (checkResult === undefined) {
            BudgetUnits.addUnit(knex, newUnitName).then((addUnitResult) => {
                BudgetOperations.addOperation(knex, addUnitResult[0], newOperationSum, firstOperationCategoryId, secondOperationCategoryId).then((addOperationResult) => {
                    return addOperationResult;
                });
            });
        } else {
            BudgetOperations.addOperation(knex, checkResult.id, newOperationSum, firstOperationCategoryId, secondOperationCategoryId).then((addOperationResult) => {
                return addOperationResult;
            });
        }
    });
}

module.exports = {
    addOperationAndUnit
}
