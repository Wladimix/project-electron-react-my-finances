const knex = require("@main/ConnectionDB.js");

const { DISTRIBUTION_OF_FINANCES_TABLE_NAME, FINANCIAL_EXPENCE, FINANCIAL_TRANSACTIONS_TABLE_NAME, NOTES_TABLE, SPENDING_CATEGORIES_TABLE_NAME } = require("@main/MainConstants.js");

class TransactionModel {

    async createTable() {
        return knex.schema
            .createTable(FINANCIAL_TRANSACTIONS_TABLE_NAME, table => {
                table.increments("id");
                table.date("date").notNullable();
                table.integer("source_of_transaction_id").references("id").inTable(DISTRIBUTION_OF_FINANCES_TABLE_NAME).notNullable();
                table.integer("transaction_address_id").references("id").inTable(DISTRIBUTION_OF_FINANCES_TABLE_NAME).notNullable();
                table.integer("spending_category_id").references("id").inTable(SPENDING_CATEGORIES_TABLE_NAME).notNullable();
                table.integer("note_id").references("id").inTable(NOTES_TABLE).notNullable();
                table.integer("amount");
                table.string("transaction_type", [10]).notNullable();
            });
    };

    getAll() {
        return knex
            .select(
                `${FINANCIAL_TRANSACTIONS_TABLE_NAME}.id`,
                `${FINANCIAL_TRANSACTIONS_TABLE_NAME}.date`,
                "sources_of_financial_distribution.id as sourceOfTransactionId",
                "sources_of_financial_distribution.name as sourceOfTransactionName",
                "sources_of_financial_distribution.is_deleted as sourceOfTransactionDeleted",
                "financial_distribution_addresses.id as transactionAddressId",
                "financial_distribution_addresses.name as transactionAddressName",
                `${SPENDING_CATEGORIES_TABLE_NAME}.id as spendingCategoryId`,
                `${SPENDING_CATEGORIES_TABLE_NAME}.name as spendingCategoryName`,
                `${SPENDING_CATEGORIES_TABLE_NAME}.is_deleted as spendingCategoryDeleted`,
                `${NOTES_TABLE}.note`,
                `${FINANCIAL_TRANSACTIONS_TABLE_NAME}.amount`,
                `${FINANCIAL_TRANSACTIONS_TABLE_NAME}.transaction_type as transactionType`,
            )
            .from(FINANCIAL_TRANSACTIONS_TABLE_NAME)

            .join(`${DISTRIBUTION_OF_FINANCES_TABLE_NAME} as sources_of_financial_distribution`, `${FINANCIAL_TRANSACTIONS_TABLE_NAME}.source_of_transaction_id`, "=", "sources_of_financial_distribution.id")
            .join(`${DISTRIBUTION_OF_FINANCES_TABLE_NAME} as financial_distribution_addresses`, `${FINANCIAL_TRANSACTIONS_TABLE_NAME}.transaction_address_id`, "=", "financial_distribution_addresses.id")
            .join(SPENDING_CATEGORIES_TABLE_NAME, `${FINANCIAL_TRANSACTIONS_TABLE_NAME}.spending_category_id`, "=", `${SPENDING_CATEGORIES_TABLE_NAME}.id`)
            .join(NOTES_TABLE, `${FINANCIAL_TRANSACTIONS_TABLE_NAME}.note_id`, "=", `${NOTES_TABLE}.id`)

            .orderBy(`${FINANCIAL_TRANSACTIONS_TABLE_NAME}.date`, "desc");
    };

    getAllDates() {
        return knex
            .select("date")
            .from(FINANCIAL_TRANSACTIONS_TABLE_NAME)
            .orderBy(`${FINANCIAL_TRANSACTIONS_TABLE_NAME}.date`, "asc");
    };

    getOneById(id) {
        return knex
            .select()
            .from(FINANCIAL_TRANSACTIONS_TABLE_NAME)
            .where({ id });
    };

    getNotes(note = {}) {
        return knex
            .select(`${NOTES_TABLE}.note`)
            .distinct(`${NOTES_TABLE}.note`)
            .from(FINANCIAL_TRANSACTIONS_TABLE_NAME)
            .join(NOTES_TABLE, `${FINANCIAL_TRANSACTIONS_TABLE_NAME}.note_id`, "=", `${NOTES_TABLE}.id`)
            .where(note);
    };

    getTotalAmount(transactionType) {
        return knex
            .select("amount")
            .sum({ amount: "amount" })
            .from(FINANCIAL_TRANSACTIONS_TABLE_NAME)
            .where({ transaction_type: transactionType });
    };

    getAmountOfExpensesByCategory() {
        return knex
            .select(`${SPENDING_CATEGORIES_TABLE_NAME}.name as purchase`)
            .sum({ amount: "amount" })
            .from(FINANCIAL_TRANSACTIONS_TABLE_NAME)
            .join(SPENDING_CATEGORIES_TABLE_NAME, `${FINANCIAL_TRANSACTIONS_TABLE_NAME}.spending_category_id`, "=", `${SPENDING_CATEGORIES_TABLE_NAME}.id`)
            .where({ transaction_type: FINANCIAL_EXPENCE })
            .groupBy("purchase");
    };

    add({ date, sourceOfTransactionId, transactionAddressId, spendingCategoryId, noteId, amount, transactionType }) {
        return knex(FINANCIAL_TRANSACTIONS_TABLE_NAME)
            .insert({
                date,
                source_of_transaction_id: sourceOfTransactionId,
                transaction_address_id: transactionAddressId,
                spending_category_id: spendingCategoryId,
                note_id: noteId,
                amount,
                transaction_type: transactionType
            });
    };

    editById({ id, date, sourceOfTransactionId, transactionAddressId, spendingCategoryId, noteId, amount, transactionType }) {
        return knex(FINANCIAL_TRANSACTIONS_TABLE_NAME)
            .where({ id })
            .update({
                date,
                source_of_transaction_id: sourceOfTransactionId,
                transaction_address_id: transactionAddressId,
                spending_category_id: spendingCategoryId,
                note_id: noteId,
                amount,
                transaction_type: transactionType
            });
    };

    deleteById(id) {
        return knex(FINANCIAL_TRANSACTIONS_TABLE_NAME)
            .where({ id })
            .del();
    };

};

module.exports = new TransactionModel();
