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

module.exports = {
    createTable
}
