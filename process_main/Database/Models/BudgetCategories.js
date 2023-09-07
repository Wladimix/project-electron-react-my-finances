const Constants = require('../../Constants');

function createTable(knex) {
    knex.schema.createTable(Constants.BUDGET_CATEGORIES_TABLE_NAME, function (table) {
        table.increments('id');
        table.string('name');
        table.string('type');
    }).then(function () {
        console.log(`Таблица "${Constants.BUDGET_CATEGORIES_TABLE_NAME}" создана`);
    }).catch(function (error) {
        console.error(error);
    });
}

function getExpensesTypes(knex) {
    return knex
        .where({
            type: Constants.EXPENSE
        })
        .select()
        .from(Constants.BUDGET_CATEGORIES_TABLE_NAME)
        .then((result) => {
            console.log(`Данные из таблицы "${Constants.BUDGET_CATEGORIES_TABLE_NAME}" загружены`);
            return result;
        }).catch((error) => {
            console.error(error);
        });
}

function addExpenseType(knex, expenceTypeName) {
    knex(Constants.BUDGET_CATEGORIES_TABLE_NAME).insert({
        name: expenceTypeName,
        type: Constants.EXPENSE
    }).then(() => {
        console.log(`Запись в таблицу "${Constants.BUDGET_CATEGORIES_TABLE_NAME}" добавлена`);
    }).catch((error) => {
        console.error(error);
    });
}

function getDistributionFinancesTypes(knex) {
    return knex
        .where({
            type: Constants.DISTRIBUTION_OF_FINANCES
        })
        .select()
        .from(Constants.BUDGET_CATEGORIES_TABLE_NAME)
        .then((result) => {
            console.log(`Данные из таблицы "${Constants.BUDGET_CATEGORIES_TABLE_NAME}" загружены`);
            return result;
        }).catch((error) => {
            console.error(error);
        });
}

function addDistributionFinancesType(knex, distributionFinancesTypeName) {
    knex(Constants.BUDGET_CATEGORIES_TABLE_NAME).insert({
        name: distributionFinancesTypeName,
        type: Constants.DISTRIBUTION_OF_FINANCES
    }).then(() => {
        console.log(`Запись в таблицу "${Constants.BUDGET_CATEGORIES_TABLE_NAME}" добавлена`);
    }).catch((error) => {
        console.error(error);
    });
}

module.exports = {
    createTable,

    getExpensesTypes,
    addExpenseType,

    getDistributionFinancesTypes,
    addDistributionFinancesType
}
