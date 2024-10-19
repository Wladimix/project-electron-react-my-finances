const knex = require("@main/ConnectionDB.js");

const { DISTRIBUTION_OF_FINANCES_TABLE_NAME } = require("@main/MainConstants.js");

class DistributionModel {

    createTable() {
        return knex.schema
            .createTable(DISTRIBUTION_OF_FINANCES_TABLE_NAME, table => {
                table.increments("id");
                table.string("name", [50]).notNullable();
                table.float("amount", 2).notNullable();

                table.unique(["name"]);
            });
    };

    getAll() {
        return knex
            .select()
            .from(DISTRIBUTION_OF_FINANCES_TABLE_NAME)
            .orderBy("name", "asc");
    };

    add({ name, amount }) {
        return knex(DISTRIBUTION_OF_FINANCES_TABLE_NAME)
            .insert({
                name,
                amount
            });
    };

    editById({ id, name, amount }) {
        return knex(DISTRIBUTION_OF_FINANCES_TABLE_NAME)
            .where({ id })
            .update({
                name,
                amount
            });
    };

    deleteById(id) {
        return knex(DISTRIBUTION_OF_FINANCES_TABLE_NAME)
            .where({ id })
            .del();
    };

};

module.exports = new DistributionModel();
