import knex from "../connectionDB";

import { Category } from "../types";
import { TablesNames } from "../constants";

class CategoryModel {

    createTable() {
        return knex.schema
            .createTable(TablesNames.SPENDING_CATEGORIES_TABLE_NAME, table => {
                table.increments("id");
                table.string("name", 50).notNullable();
                table.boolean("is_deleted").notNullable().defaultTo(false);

                table.unique("name");
            });
    };

    getAll(): Promise<Category[]>  {
        return knex
            .select("id", "name")
            .from(TablesNames.SPENDING_CATEGORIES_TABLE_NAME)
            .whereNot({ /* id: 1, */ is_deleted: true })
            .orderBy("name", "asc");
    };

};

export default new CategoryModel();
