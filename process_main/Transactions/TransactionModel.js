const knex = require("@main/ConnectionDB.js");

const { DISTRIBUTION_OF_FINANCES_TABLE_NAME, FINANCIAL_TRANSACTIONS_TABLE_NAME, SPENDING_CATEGORIES_TABLE_NAME } = require("@main/MainConstants.js");

class TransactionModel {

    async createTable() {
        return knex.schema
            .createTable(FINANCIAL_TRANSACTIONS_TABLE_NAME, table => {
                table.increments("id");
                table.date("date").notNullable();
                table.integer("source_of_transaction_id").references("id").inTable(DISTRIBUTION_OF_FINANCES_TABLE_NAME).notNullable();
                table.integer("transaction_address_id").references("id").inTable(DISTRIBUTION_OF_FINANCES_TABLE_NAME).notNullable();
                table.integer("spending_category_id").references("id").inTable(SPENDING_CATEGORIES_TABLE_NAME).notNullable();
                table.string("note");
                table.integer("amount");
                table.string("transaction_type", [10]).notNullable();
            });
    };

};

module.exports = new TransactionModel();
