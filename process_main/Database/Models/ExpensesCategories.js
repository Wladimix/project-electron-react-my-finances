const Constants = require('../../Constants');

function createTable(knex) {
    knex.schema.createTable(Constants.EXPENSES_CATEGORIES_TABLE_NAME, function (table) {
        table.increments('id');
        table.string('name');
    }).then(function () {
        console.log(`Таблица "${Constants.EXPENSES_CATEGORIES_TABLE_NAME}" создана`);
    }).catch(function (error) {
        console.error(error);
    });
}

function getExpensesCategories(knex) {
    return knex
        .select()
        .from(Constants.EXPENSES_CATEGORIES_TABLE_NAME)
        .then((result) => {
            console.log(`Данные из таблицы "${Constants.EXPENSES_CATEGORIES_TABLE_NAME}" загружены`);
            return result;
        }).catch((error) => {
            console.error(error);
        });
}

function addExpenseCategory(knex, expenceCategoryName) {
    knex(Constants.EXPENSES_CATEGORIES_TABLE_NAME).insert({
        name: expenceCategoryName,
    }).then(() => {
        console.log(`Запись в таблицу "${Constants.EXPENSES_CATEGORIES_TABLE_NAME}" добавлена`);
    }).catch((error) => {
        console.error(error);
    });
}

module.exports = {
    createTable,

    getExpensesCategories,
    addExpenseCategory
}
