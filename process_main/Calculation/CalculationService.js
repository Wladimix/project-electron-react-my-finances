const DataService = require("@main/Data/DataService.js");
const TransactionModel = require("@main/Transaction/TransactionModel.js");

const { FINANCIAL_TRANSACTIONS_TABLE_NAME } = require("@main/MainConstants.js");

class CalculationService {

    async getStatisticsOnExpenses(date) {
        const amountOfExpenses = TransactionModel.getAmountOfExpensesByCategory();
        const { year, month } = date;

        const result = await amountOfExpenses.whereBetween(`${FINANCIAL_TRANSACTIONS_TABLE_NAME}.date`, DataService.makeDateSearchOptions(year, month));
        console.info("Получена статистика по расходам");

        return DataService.processDataOut(result);
    };

};

module.exports = new CalculationService();
