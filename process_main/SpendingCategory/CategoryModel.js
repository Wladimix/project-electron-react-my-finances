const { SPENDING_CATEGORIES_TABLE_NAME } = require("@/MainConstants.js");

class CategoryModel {

    async createTable(knex) {
        return knex.schema
            .createTable(SPENDING_CATEGORIES_TABLE_NAME, function (table) {
                table.increments('id');
                table.string('name', [50]).notNullable();

                table.unique(['name']);
            });
    };

};

module.exports = new CategoryModel();
