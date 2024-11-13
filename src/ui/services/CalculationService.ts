import { showNotification } from "../lib/utils";

class CalculationService {

    async getCapital(setCapital: React.Dispatch<React.SetStateAction<string>>) {
        const capital = await window.electron.getCapital();
        showNotification(capital, {onlyErrorChecking: true});

        if (capital.data) {
            setCapital(capital.data);
        } else {
            setCapital("?");
        };
    };

    async getTotalAmount(setTotalStatistics: React.Dispatch<React.SetStateAction<TotalStatisticsDTO>>, date: DateDTO) {
        const totalStatistics = await window.electron.getTotalAmount(date);
        showNotification(totalStatistics, {onlyErrorChecking: true});
        if (totalStatistics.data) {
            setTotalStatistics(totalStatistics.data);
        } else {
            setTotalStatistics({
                totalIncomeAmount: "",
                totalExpenceAmount: "",
                savings: ""
            });
        };
    };

    async getStatisticsOnExpenses(setAmountOfExpenses: React.Dispatch<React.SetStateAction<AmountOfExpenses[]>>, date: DateDTO) {
        const amountOfExpenses = await window.electron.getStatisticsOnExpenses(date);
        showNotification(amountOfExpenses, {onlyErrorChecking: true});

        if (amountOfExpenses.data) {
            setAmountOfExpenses(amountOfExpenses.data);
        } else {
            setAmountOfExpenses([]);
        };
    };

};

export default new CalculationService();
