import knex from "../connectionDB";

import { TablesNames } from "../constants";

class TransactionModel {

    createTable() {
        return knex.schema
            .createTable(TablesNames.NOTES_TABLE, table => {
                table.increments("id");
                table.string("note", 70);

                table.unique("note");
            });
    };

};

export default new TransactionModel();
