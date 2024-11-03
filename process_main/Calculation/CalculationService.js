const DataService = require("@main/Data/DataService.js");
const TransactionModel = require("@main/Transaction/TransactionModel.js");

const { FINANCIAL_INCOME, FINANCIAL_EXPENCE, FINANCIAL_TRANSACTIONS_TABLE_NAME } = require("@main/MainConstants.js");

class CalculationService {

    async getStatisticsOnExpenses(date) {
        const amountOfExpensesQuery = TransactionModel.getAmountOfExpensesByCategory();
        const { year, month } = date;

        const amountOfExpenses = await amountOfExpensesQuery.whereBetween(`${FINANCIAL_TRANSACTIONS_TABLE_NAME}.date`, DataService.makeDateSearchOptions(year, month));
        console.info("Получена статистика по расходам");

        return DataService.processDataOut(amountOfExpenses);
    };

    async getTotalAmount(date) {
        const totalIncomeAmountQuery = TransactionModel.getTotalAmount(FINANCIAL_INCOME);
        const totalExpenceAmountQuery = TransactionModel.getTotalAmount(FINANCIAL_EXPENCE);

        const { year, month } = date;
        let totalIncomeAmount = await totalIncomeAmountQuery.whereBetween(`${FINANCIAL_TRANSACTIONS_TABLE_NAME}.date`, DataService.makeDateSearchOptions(year, month));
        let totalExpenceAmount = await totalExpenceAmountQuery.whereBetween(`${FINANCIAL_TRANSACTIONS_TABLE_NAME}.date`, DataService.makeDateSearchOptions(year, month));
        totalIncomeAmount = totalIncomeAmount[0].amount ?? 0;
        totalExpenceAmount = totalExpenceAmount[0].amount ?? 0;

        const totalStatistics = {
            totalIncomeAmount: DataService.processDataOut([{ amount: totalIncomeAmount }])[0].amount,
            totalExpenceAmount: DataService.processDataOut([{ amount: totalExpenceAmount }])[0].amount,
            savings: DataService.processDataOut([{ amount: totalIncomeAmount - totalExpenceAmount }])[0].amount
        };
        console.info("Получена общая статистика");

        return totalStatistics;
    };

};

module.exports = new CalculationService();
