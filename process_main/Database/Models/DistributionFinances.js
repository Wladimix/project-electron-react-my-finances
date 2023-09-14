const Constants = require('../../Constants');

function createTable(knex) {
    return knex.schema.createTable(Constants.DISTRIBUTION_OF_FINANCES_TABLE_NAME, function (table) {
        table.increments('id');
        table.string('name', [50]).notNullable();
        table.integer('sorting').notNullable();

        table.unique(['id','name']);
    });
}

module.exports = {
    createTable
}
