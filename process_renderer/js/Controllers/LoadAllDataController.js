import DistributionFinancesController from "./DistributionFinancesController.js";
import ExpensesCategoriesController from "./ExpensesCategoriesController.js";

export default function loadAllData() {
    DistributionFinancesController.loadDistributionFinances();
    ExpensesCategoriesController.loadExpensesCategories();
}
