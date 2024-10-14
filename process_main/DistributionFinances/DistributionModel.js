const knex = require("@main/ConnectionDB.js");

const { DISTRIBUTION_OF_FINANCES_TABLE_NAME } = require("@main/MainConstants.js");

class DistributionModel {

    createTable() {
        return knex.schema
            .createTable(DISTRIBUTION_OF_FINANCES_TABLE_NAME, function (table) {
                table.increments('id');
                table.string('name', [50]).notNullable();
                table.float('amount', 2).notNullable().defaultTo(0);

                table.unique(['name']);
            });
    };

    add(name, amount) {
        return knex(DISTRIBUTION_OF_FINANCES_TABLE_NAME)
            .insert({
                name,
                amount
            });
    };

};

module.exports = new DistributionModel();
