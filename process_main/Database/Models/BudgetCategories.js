function createTable(knex) {
    knex.schema.createTable('budget_categories', function (table) {
        table.increments('id');
        table.string('name');
        table.integer('summ');
        table.string('type');
    }).then(function () {
        console.log('Таблица "budget_categories" создана');
    }).catch(function (error) {
        console.error(error);
    });
}

module.exports = {
    createTable
}
