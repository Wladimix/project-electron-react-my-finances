import knex from "../connectionDB";

import { DistributionType } from "../types";
import { TablesNames } from "../constants";

class DistributionModel {

    createTable() {
        return knex.schema
            .createTable(TablesNames.DISTRIBUTION_OF_FINANCES_TABLE_NAME, table => {
                table.increments("id");
                table.string("name", 50).notNullable();
                table.float("amount", 2).notNullable();
                table.boolean("is_deleted").notNullable().defaultTo(false);

                table.unique("name");
            });
    };

    async getAll(): Promise<DistributionType[]> {
        return await knex
            .select("id", "name", "amount")
            .from(TablesNames.DISTRIBUTION_OF_FINANCES_TABLE_NAME)
            .whereNot({ /* id: 1, */ is_deleted: true })
            .orderBy("name", "asc");
    };

};

export default new DistributionModel();
