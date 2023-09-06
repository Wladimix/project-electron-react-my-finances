const Constants = require('../../Constants');

function createTable(knex) {
    knex.schema.createTable(Constants.BUDGET_UNITS_TABLE_NAME, function (table) {
        table.increments('id');
        table.string('name');
    }).then(function () {
        console.log(`Таблица "${Constants.BUDGET_UNITS_TABLE_NAME}" создана`);
    }).catch(function (error) {
        console.error(error);
    });
}

function addUnit(knex, newUnitName) {
    knex(Constants.BUDGET_UNITS_TABLE_NAME).insert({
        name: newUnitName
    }).then(() => {
        console.log(`Запись в таблицу "${Constants.BUDGET_UNITS_TABLE_NAME}" добавлена`);
    }).catch((error) => {
        console.error(error);
    });
}

function checkAvailabilityOfUnitAndReturnId(knex, unitName) {
    return knex(Constants.BUDGET_UNITS_TABLE_NAME).where({
        name: unitName
    }).first().then((result) => {
        console.log(`Поиск поля "${unitName}" в таблице "${Constants.BUDGET_UNITS_TABLE_NAME}" завершён`);
        return result;
    }).catch((error) => {
        console.error(error);
    });
}

module.exports = {
    createTable,
    addUnit,
    checkAvailabilityOfUnitAndReturnId
}
