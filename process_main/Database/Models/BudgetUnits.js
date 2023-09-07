const Constants = require('../../Constants');

function createTable(knex) {
    knex.schema.createTable(Constants.BUDGET_UNITS_TABLE_NAME, function (table) {
        table.increments('id');
        table.string('name');
    }).then(() => {
        return knex(Constants.BUDGET_UNITS_TABLE_NAME).insert({
            name: ''
        });
    }).then(() => {
        console.log(`Таблица "${Constants.BUDGET_UNITS_TABLE_NAME}" создана`);
    }).catch((error) => {
        console.error(error);
    });
}

function getUnits(knex) {
    return knex.select().from(Constants.BUDGET_UNITS_TABLE_NAME)
        .then((res) => {
            console.log(`Данные из таблицы "${Constants.BUDGET_UNITS_TABLE_NAME}" загружены`);
            return res;
        }).catch((error) => {
            console.error(error);
        });
}

function addUnit(knex, newUnitName) {
    return knex(Constants.BUDGET_UNITS_TABLE_NAME).insert({
        name: newUnitName
    }).then((result) => {
        console.log(`Запись в таблицу "${Constants.BUDGET_UNITS_TABLE_NAME}" добавлена`);
        return result;
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
    getUnits,
    addUnit,
    checkAvailabilityOfUnitAndReturnId
}
