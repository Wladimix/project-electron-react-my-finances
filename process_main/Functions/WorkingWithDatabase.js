const BudgetUnits = require('../Database/Models/BudgetUnits');
const BudgetOperations = require('../Database/Models/BudgetOperations');

function addOperationAndUnit(knex, newUnitName, newOperationSum, firstOperationCategoryId, secondOperationCategoryId) {
    return BudgetUnits.checkAvailabilityOfUnitAndReturnId(knex, newUnitName).then((checkResult) => {
        if (checkResult === undefined) {
            return BudgetUnits.addUnit(knex, newUnitName).then((addUnitResult) => {
                return BudgetOperations.addOperation(knex, addUnitResult[0], newOperationSum, firstOperationCategoryId, secondOperationCategoryId).then((addOperationResult) => {
                    return addOperationResult;
                });
            });
        } else {
            return BudgetOperations.addOperation(knex, checkResult.id, newOperationSum, firstOperationCategoryId, secondOperationCategoryId).then((addOperationResult) => {
                return addOperationResult;
            });
        }
    });
}

module.exports = {
    addOperationAndUnit
}
