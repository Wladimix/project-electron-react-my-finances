import Services from "@renderer/services/Services.js";

export default class CalculationService {

    static async getStatisticsOnExpenses(setAmountOfExpenses, date) {
        const amountOfExpenses = await electron.getStatisticsOnExpenses(date);
        new Services().showNotification(amountOfExpenses, true);
        setAmountOfExpenses(amountOfExpenses.data);
    };

    static async getTotalAmount(setTotalStatistics, date) {
        const services = new Services();
        const totalStatistics = await electron.getTotalAmount(date);
        services.showNotification(totalStatistics, true);
        setTotalStatistics(totalStatistics.data);
    };

};
