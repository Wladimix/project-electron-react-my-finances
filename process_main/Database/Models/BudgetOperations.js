const Constants = require('../../Constants');

function createTable(knex) {
    knex.schema.createTable(Constants.BUDGET_OPERATIONS_TABLE_NAME, function (table) {
        table.increments('id');
        table.string('date');
        table.integer('amount');
        table.integer('budget_units_id');
        table.integer('first_category_id');
        table.integer('second_category_id');
    }).then(function () {
        console.log(`Таблица "${Constants.BUDGET_OPERATIONS_TABLE_NAME}" создана`);
    }).catch(function (error) {
        console.error(error);
    });
}

function getOperations(knex) {
    return knex(Constants.BUDGET_OPERATIONS_TABLE_NAME)
        .join(Constants.BUDGET_UNITS_TABLE_NAME, `${Constants.BUDGET_OPERATIONS_TABLE_NAME}.budget_units_id`, '=', `${Constants.BUDGET_UNITS_TABLE_NAME}.id`)
        .join(Constants.BUDGET_CATEGORIES_TABLE_NAME, `${Constants.BUDGET_OPERATIONS_TABLE_NAME}.first_category_id`, '=', `${Constants.BUDGET_CATEGORIES_TABLE_NAME}.id`)
        .select(
            /* `${Constants.BUDGET_OPERATIONS_TABLE_NAME}.date as operation_date`,
            `${Constants.BUDGET_UNITS_TABLE_NAME}.name as operation_name`,
            `${Constants.BUDGET_OPERATIONS_TABLE_NAME}.amount as operation_amount`,
            `${Constants.BUDGET_CATEGORIES_TABLE_NAME}.name as first_category_name`, */
        );
}

function addOperation(knex, newUnitId, newOperationSum, firstOperationCategoryId, secondOperationCategoryId) {
    return knex(Constants.BUDGET_OPERATIONS_TABLE_NAME).insert({
        amount: newOperationSum,
        budget_units_id: newUnitId,
        first_category_id: firstOperationCategoryId,
        second_category_id: secondOperationCategoryId,
    }).then((result) => {
        console.log(`Запись в таблицу "${Constants.BUDGET_OPERATIONS_TABLE_NAME}" добавлена`);
        return result;
    }).catch((error) => {
        console.error(error);
    });
}

module.exports = {
    createTable,
    getOperations,
    addOperation
}
