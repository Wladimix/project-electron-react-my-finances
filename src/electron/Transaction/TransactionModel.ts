import knex from "../connectionDB";

import { TablesNames } from "../constants";

class TransactionModel {

    createTable() {
        return knex.schema
            .createTable(TablesNames.FINANCIAL_TRANSACTIONS_TABLE_NAME, table => {
                table.increments("id");
                table.date("date").notNullable();
                table.integer("source_of_transaction_id").references("id").inTable(TablesNames.DISTRIBUTION_OF_FINANCES_TABLE_NAME).notNullable();
                table.integer("transaction_address_id").references("id").inTable(TablesNames.DISTRIBUTION_OF_FINANCES_TABLE_NAME).notNullable();
                table.integer("spending_category_id").references("id").inTable(TablesNames.SPENDING_CATEGORIES_TABLE_NAME).notNullable();
                table.integer("note_id").references("id").inTable(TablesNames.NOTES_TABLE).notNullable();
                table.integer("amount");
                table.string("transaction_type", 7).notNullable();
            });
    };

};

export default new TransactionModel();
