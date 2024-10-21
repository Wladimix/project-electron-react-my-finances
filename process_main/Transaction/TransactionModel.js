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

    getAll() {
        return knex
            .select(
                `${FINANCIAL_TRANSACTIONS_TABLE_NAME}.date`,
                "sources_of_financial_distribution.name as source_of_transaction",
                "financial_distribution_addresses.name as transaction_address",
                `${SPENDING_CATEGORIES_TABLE_NAME}.name as spending_category`,
                `${FINANCIAL_TRANSACTIONS_TABLE_NAME}.note`,
                `${FINANCIAL_TRANSACTIONS_TABLE_NAME}.amount`,
                `${FINANCIAL_TRANSACTIONS_TABLE_NAME}.transaction_type`,
            )
            .from(FINANCIAL_TRANSACTIONS_TABLE_NAME)

            .join(`${DISTRIBUTION_OF_FINANCES_TABLE_NAME} as sources_of_financial_distribution`, `${FINANCIAL_TRANSACTIONS_TABLE_NAME}.source_of_transaction_id`, "=", "sources_of_financial_distribution.id")
            .join(`${DISTRIBUTION_OF_FINANCES_TABLE_NAME} as financial_distribution_addresses`, `${FINANCIAL_TRANSACTIONS_TABLE_NAME}.transaction_address_id`, "=", "financial_distribution_addresses.id")
            .join(SPENDING_CATEGORIES_TABLE_NAME, `${FINANCIAL_TRANSACTIONS_TABLE_NAME}.spending_category_id`, "=", `${SPENDING_CATEGORIES_TABLE_NAME}.id`)

            .orderBy(`${FINANCIAL_TRANSACTIONS_TABLE_NAME}.date`);
    };

};

module.exports = new TransactionModel();
