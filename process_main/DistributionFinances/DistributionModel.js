const knex = require("@main/ConnectionDB.js");

const { DISTRIBUTION_OF_FINANCES_TABLE_NAME } = require("@main/MainConstants.js");

class DistributionModel {

    createTable() {
        return knex.schema
            .createTable(DISTRIBUTION_OF_FINANCES_TABLE_NAME, table => {
                table.increments("id");
                table.string("name", [50]).notNullable();
                table.float("amount", 2).notNullable();
                table.boolean("is_deleted").notNullable().defaultTo(false);

                table.unique(["name"]);
            });
    };

    getAll() {
        return knex
            .select("id", "name", "amount")
            .from(DISTRIBUTION_OF_FINANCES_TABLE_NAME)
            .whereNot({ id: 1, is_deleted: true })
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
            .update({ is_deleted: true });
    };

};

module.exports = new DistributionModel();
