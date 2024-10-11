const { DISTRIBUTION_OF_FINANCES_TABLE_NAME } = require("@/MainConstants.js");

class DistributionModel {

    async createTable(knex) {
        return knex.schema
            .createTable(DISTRIBUTION_OF_FINANCES_TABLE_NAME, function (table) {
                table.increments('id');
                table.string('name', [50]).notNullable();
                table.float('amount', 2).notNullable().defaultTo(0);

                table.unique(['name']);
            });
    };

};

module.exports = new DistributionModel();
