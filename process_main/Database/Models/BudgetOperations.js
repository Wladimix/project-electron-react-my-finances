function createTable(knex) {
    knex.schema.createTable('budget_operations', function (table) {
        table.increments('id');
        table.string('date');
        table.integer('amount');
        table.integer('budget_units_id');
        table.integer('budget_categories_id');
    }).then(function () {
        console.log('Таблица budget_operations создана');
    }).catch(function (error) {
        console.error(error);
    });
}

module.exports = {
    createTable
}
