function createTable(knex) {
    knex.schema.createTable('budget_units', function (table) {
        table.increments('id');
        table.string('name');
    }).then(function () {
        console.log('Таблица budget_units создана');
    }).catch(function (error) {
        console.error(error);
    });
}

module.exports = {
    createTable
}
