const Constants = require('../../Constants');

function createTable(knex) {
    return knex.schema.createTable(Constants.EXPENSES_CATEGORIES_TABLE_NAME, function (table) {
        table.increments('id');
        table.string('name', [50]).notNullable();

        table.unique(['name']);
    });
}

function getExpensesCategories(knex, queryResult = null) {
    if (queryResult !== null) {
        return queryResult.then(() => {
            return knex
                .select()
                .from(Constants.EXPENSES_CATEGORIES_TABLE_NAME);
        })
    } else {
        return knex
            .select()
            .from(Constants.EXPENSES_CATEGORIES_TABLE_NAME);
    }
}

function addExpenseCategory(knex, expenseCategoryName) {
    return knex(Constants.EXPENSES_CATEGORIES_TABLE_NAME)
        .insert({
            name: expenseCategoryName
        });
}

module.exports = {
    createTable,
    getExpensesCategories,
    addExpenseCategory
}
