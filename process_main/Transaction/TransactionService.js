const DataService = require("@main/Data/DataService.js");

const { getAll, add, editById, deleteById } = require("@main/Transaction/TransactionModel.js");
const { FINANCIAL_TRANSACTIONS_TABLE_NAME } = require("@main/MainConstants.js");

class TransactionService {

    async getAllTransactions() {
        const transactions = await getAll();
        console.info(`Получены данные из таблицы "${FINANCIAL_TRANSACTIONS_TABLE_NAME}"`);

        return DataService.processDataOut(transactions);
    };

};

module.exports = new TransactionService();
