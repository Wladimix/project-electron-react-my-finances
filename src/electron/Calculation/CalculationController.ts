import CalculationService from "./CalculationService";
import ErrorHandling from "../lib/ErrorHandling";

import { RequestStatuses } from "../constants";

class CalculationController {

    async getCapital(): Promise<ResponceData<string>> {
        try {
            const capital = await CalculationService.getCapital();

            return {
                data: capital,
                status: RequestStatuses.SUCCESS,
                message: "Получен капитал"
            }
        } catch (error) {
            return {
                data: null,
                status: RequestStatuses.ERROR,
                message: await ErrorHandling.makeErrorMessage(error as Error, "Ошибка получения капитала")
            };
        };
    };

    async getTotalAmount(event, date: DateDTO): Promise<ResponceData<TotalStatisticsDTO>> {
        try {
            const totalAmount = await CalculationService.getTotalAmount(date);

            return {
                data: totalAmount,
                status: RequestStatuses.SUCCESS,
                message: "Получена общая статистика по транзакциям"
            }
        } catch (error) {
            return {
                data: null,
                status: RequestStatuses.ERROR,
                message: await ErrorHandling.makeErrorMessage(error as Error, "Ошибка получения общей статистики")
            };
        };
    };

    async getStatisticsOnExpenses(event, date: DateDTO): Promise<ResponceData<AmountOfExpenses[]>> {
        try {
            const statisticsOnExpenses = await CalculationService.getStatisticsOnExpenses(date);

            return {
                data: statisticsOnExpenses,
                status: RequestStatuses.SUCCESS,
                message: "Получена статистика по расходам"
            }
        } catch (error) {
            return {
                data: null,
                status: RequestStatuses.ERROR,
                message: await ErrorHandling.makeErrorMessage(error as Error, "Ошибка получения статистики по расходам")
            };
        };
    };

};

export default new CalculationController();
