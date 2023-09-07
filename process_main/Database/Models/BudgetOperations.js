const Constants = require('../../Constants');

function createTable(knex) {
    knex.schema.createTable(Constants.BUDGET_OPERATIONS_TABLE_NAME, function (table) {
        table.increments('id');
        table.string('date');
        table.integer('amount');
        table.integer('budget_units_id');
        table.integer('distribution_finances_id');
        table.integer('expences_types_id');
    }).then(function () {
        console.log(`Таблица "${Constants.BUDGET_OPERATIONS_TABLE_NAME}" создана`);
    }).catch(function (error) {
        console.error(error);
    });
}

function addOperation(knex, newUnitId, newOperationSum, firstOperationCategoryId, secondOperationCategoryId) {
    return knex(Constants.BUDGET_OPERATIONS_TABLE_NAME).insert({
        amount: newOperationSum,
        budget_units_id: newUnitId,
        distribution_finances_id: firstOperationCategoryId,
        expences_types_id: secondOperationCategoryId,
    }).then((result) => {
        console.log(`Запись в таблицу "${Constants.BUDGET_OPERATIONS_TABLE_NAME}" добавлена`);
        return result;
    }).catch((error) => {
        console.error(error);
    });
}

module.exports = {
    createTable,
    addOperation
}
