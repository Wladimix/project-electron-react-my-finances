const ErrorService = require("@main/Error/ErrorService.js");

const { getStatisticsOnExpenses } = require("@main/Calculation/CalculationService.js");
const { REQUEST_STATUS_SUCCESS, REQUEST_STATUS_ERROR } = require("@main/MainConstants.js");

class CalculationController {

    async getStatisticsOnExpenses(event, date) {
        try {
            const statisticsOnExpenses = await getStatisticsOnExpenses(date);

            return {
                data: statisticsOnExpenses,
                status: REQUEST_STATUS_SUCCESS,
                message: "Получена статистика по расходам"
            }
        } catch (error) {
            return {
                status: REQUEST_STATUS_ERROR,
                message: await ErrorService.makeErrorMessage(error, "Ошибка получения статистики по расходам")
            };
        };
    };

};

module.exports = new CalculationController();
