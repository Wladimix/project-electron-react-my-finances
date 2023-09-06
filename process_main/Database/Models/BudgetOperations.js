const Constants = require('../../Constants');

function createTable(knex) {
    knex.schema.createTable(Constants.BUDGET_OPERATIONS_TABLE_NAME, function (table) {
        table.increments('id');
        table.string('date');
        table.integer('amount');
        table.integer('budget_units_id');
        table.integer('budget_categories_id');
    }).then(function () {
        console.log(`Таблица "${Constants.BUDGET_OPERATIONS_TABLE_NAME}" создана`);
    }).catch(function (error) {
        console.error(error);
    });
}

module.exports = {
    createTable
}
