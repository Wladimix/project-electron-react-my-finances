const knex = require("@main/ConnectionDB.js");

const { SPENDING_CATEGORIES_TABLE_NAME } = require("@main/MainConstants.js");

class CategoryModel {

    async createTable() {
        return knex.schema
            .createTable(SPENDING_CATEGORIES_TABLE_NAME, table => {
                table.increments("id");
                table.string("name", [50]).notNullable();
                table.boolean("is_deleted").notNullable().defaultTo(false);

                table.unique(["name"]);
            });
    };

    getAll() {
        return knex
            .select("id", "name")
            .from(SPENDING_CATEGORIES_TABLE_NAME)
            .whereNot({ id: 1, is_deleted: true })
            .orderBy("name", "asc");
    };

    add({ name }) {
        return knex(SPENDING_CATEGORIES_TABLE_NAME)
            .insert({ name });
    };

    editById({ id, name }) {
        return knex(SPENDING_CATEGORIES_TABLE_NAME)
            .where({ id })
            .update({ name });
    };

    deleteById(id) {
        return knex(SPENDING_CATEGORIES_TABLE_NAME)
            .where({ id })
            .update({ is_deleted: true });
    };

};

module.exports = new CategoryModel();
