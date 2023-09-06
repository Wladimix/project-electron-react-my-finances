const Constants = require('../../Constants');

function createTable(knex) {
    knex.schema.createTable(Constants.BUDGET_CATEGORIES_TABLE_NAME, function (table) {
        table.increments('id');
        table.string('name');
        table.integer('summ');
        table.string('type');
    }).then(function () {
        console.log(`Таблица "${Constants.BUDGET_CATEGORIES_TABLE_NAME}" создана`);
    }).catch(function (error) {
        console.error(error);
    });
}

function getExpensesTypes(knex) {
    return knex.select().from(Constants.BUDGET_CATEGORIES_TABLE_NAME)
        .then((res) => {
            console.log(`Данные из таблицы "${Constants.BUDGET_CATEGORIES_TABLE_NAME}" загружены`);
            return res;
        }).catch((error) => {
            console.error(error);
        });
}

function addExpenseType(knex) {
    knex(Constants.BUDGET_CATEGORIES_TABLE_NAME).insert({
        name: 'new Name'
    }).then(() => {
        console.log(`Запись в таблицу "${Constants.BUDGET_CATEGORIES_TABLE_NAME}" добавлена`);
    }).catch((error) => {
        console.error(error);
    });
}

module.exports = {
    createTable,
    getExpensesTypes,
    addExpenseType
}
