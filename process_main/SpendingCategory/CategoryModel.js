const knex = require("@main/ConnectionDB.js");

const { SPENDING_CATEGORIES_TABLE_NAME } = require("@main/MainConstants.js");

class CategoryModel {

    async createTable() {
        return knex.schema
            .createTable(SPENDING_CATEGORIES_TABLE_NAME, function (table) {
                table.increments('id');
                table.string('name', [50]).notNullable();

                table.unique(['name']);
            });
    };

};

module.exports = new CategoryModel();
