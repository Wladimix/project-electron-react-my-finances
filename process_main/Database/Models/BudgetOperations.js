const Constants = require('../../Constants');

function createTable(knex) {
    knex.schema.createTable(Constants.BUDGET_OPERATIONS_TABLE_NAME, function (table) {
        table.increments('id');
        table.string('date');
        table.integer('amount');
        table.integer('budget_units_id');
        table.integer('first_distribution_type_id');
        table.integer('second_distribution_type_id');
        table.integer('expense_category_id');
        table.integer('operation_type');
    }).then(function () {
        console.log(`Таблица "${Constants.BUDGET_OPERATIONS_TABLE_NAME}" создана`);
    }).catch(function (error) {
        console.error(error);
    });
}

function getOperations(knex) {
    return knex(Constants.BUDGET_OPERATIONS_TABLE_NAME)
        // .whereBetween('operation_date', ['2021-01-01', '2023-01-03'])
        .join(Constants.BUDGET_UNITS_TABLE_NAME, `${Constants.BUDGET_OPERATIONS_TABLE_NAME}.budget_units_id`, '=', `${Constants.BUDGET_UNITS_TABLE_NAME}.id`)
        .join(`${Constants.DISTRIBUTION_OF_FINANCES_TABLE_NAME} as first_distribution_of_finances`, `${Constants.BUDGET_OPERATIONS_TABLE_NAME}.first_distribution_type_id`, '=', 'first_distribution_of_finances.id')
        .join(`${Constants.DISTRIBUTION_OF_FINANCES_TABLE_NAME} as second_distribution_of_finances`, `${Constants.BUDGET_OPERATIONS_TABLE_NAME}.second_distribution_type_id`, '=', 'second_distribution_of_finances.id')
        .join(Constants.EXPENSES_CATEGORIES_TABLE_NAME, `${Constants.BUDGET_OPERATIONS_TABLE_NAME}.expense_category_id`, '=', `${Constants.EXPENSES_CATEGORIES_TABLE_NAME}.id`)
        .select(
            `${Constants.BUDGET_OPERATIONS_TABLE_NAME}.date as operation_date`,
            `${Constants.BUDGET_UNITS_TABLE_NAME}.name as operation_name`,
            `${Constants.BUDGET_OPERATIONS_TABLE_NAME}.amount as operation_amount`,
            'first_distribution_of_finances.name as first_distribution_type',
            'second_distribution_of_finances.name as second_distribution_type',
            `${Constants.EXPENSES_CATEGORIES_TABLE_NAME}.name as expense_category`,
            `${Constants.BUDGET_OPERATIONS_TABLE_NAME}.operation_type as operation_type`
        ).then((result) => {
            console.log(`Данные из таблицы "${Constants.BUDGET_OPERATIONS_TABLE_NAME}" загружены`);
            console.log(result);
            return result;
        }).catch((error) => {
            console.error(error);
        });
}

function addOperation(knex, newUnitId, newOperationSum, firstOperationCategoryId, secondOperationCategoryId) {
    return knex(Constants.BUDGET_OPERATIONS_TABLE_NAME).insert({
        date: '2022-01-01',
        amount: newOperationSum,
        budget_units_id: newUnitId,
        first_distribution_type_id: firstOperationCategoryId,
        second_distribution_type_id: secondOperationCategoryId,
        expense_category_id: secondOperationCategoryId,
        operation_type: 'translation'
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
