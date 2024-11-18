import DistributionModel from "../DustributionFinances/DustributionModel";
import ObjectEditing from "../lib/ObjectEditing";
import TransactionModel from "../Transaction/TransactionModel";

import { convertAmountToString, makeDateSearchOptions } from "../lib/utils";
import { TablesNames, TransactionTypes, NOT_DEFINE } from '../constants';

class CalculationService {

    async getCapital(): Promise<string> {
        const capital = await DistributionModel.getSumDistributiontypes();
        return convertAmountToString(capital);
    };

    async getTotalAmount(date): Promise<TotalAmount> {
        const totalIncomeAmountQuery = TransactionModel.getTotalAmount(TransactionTypes.FINANCIAL_INCOME);
        const totalExpenceAmountQuery = TransactionModel.getTotalAmount(TransactionTypes.FINANCIAL_EXPENCE);

        const { year, month } = date;
        let totalIncomeAmount = await totalIncomeAmountQuery.whereBetween(`${TablesNames.FINANCIAL_TRANSACTIONS_TABLE_NAME}.date`, makeDateSearchOptions(year, month));
        let totalExpenceAmount = await totalExpenceAmountQuery.whereBetween(`${TablesNames.FINANCIAL_TRANSACTIONS_TABLE_NAME}.date`, makeDateSearchOptions(year, month));

        totalIncomeAmount = totalIncomeAmount[0].amount ?? 0;
        totalExpenceAmount = totalExpenceAmount[0].amount ?? 0;

        const totalStatistics = {
            totalIncomeAmount: convertAmountToString(totalIncomeAmount),
            totalExpenceAmount: convertAmountToString(totalExpenceAmount),
            savings: convertAmountToString(totalIncomeAmount - totalExpenceAmount)
        };
        console.info("Получена общая статистика");

        return totalStatistics;
    };

    async getStatisticsOnExpenses(date: DateDTO): Promise<AmountOfExpenses> {
        if (date.year === NOT_DEFINE) {
            return [];
        };

        const amountOfExpensesQuery = TransactionModel.getAmountOfExpensesByCategory();
        const { year, month } = date;

        const amountOfExpenses = await amountOfExpensesQuery.whereBetween(`${TablesNames.FINANCIAL_TRANSACTIONS_TABLE_NAME}.date`, makeDateSearchOptions(year, month));
        console.info("Получена статистика по расходам");

        return amountOfExpenses.map(expenses =>
            new ObjectEditing(expenses).changeProperty("amount", convertAmountToString).getResult()
        ) as AmountOfExpenses;
    };

    async calculateInflation(year: number): Promise<InflationDTO> {
        const recordsForInflation = await TransactionModel.getRecordsForInflation(year);
        console.log(recordsForInflation);

        return {
            year: 5,
            data: {
                "Продукт 1": {
                    "январь": 3,
                    "февраль": 0,
                    "март": 4,
                    "апрель": 0,
                    "май": 0,
                    "июнь": 0,
                    "июль": 2,
                    "август": 5,
                    "сентябрь": 0,
                    "октябрь": 0,
                    "ноябрь": 3,
                    "декабрь": 3
                }
            }
        }
    };

};

export default new CalculationService();

type TotalAmount = {
    totalIncomeAmount: string
    totalExpenceAmount: string
    savings: string
};

type AmountOfExpenses = {
    purchase: string
    amount: string
}[];
