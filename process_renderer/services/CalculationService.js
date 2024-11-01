import Services from "@renderer/services/Services.js";

export default class CalculationService {

    static async getStatisticsOnExpenses(setAmountOfExpenses, date) {
        const amountOfExpenses = await electron.getStatisticsOnExpenses(date);
        new Services().showNotification(amountOfExpenses, true);
        setAmountOfExpenses(amountOfExpenses.data);
    };

};
