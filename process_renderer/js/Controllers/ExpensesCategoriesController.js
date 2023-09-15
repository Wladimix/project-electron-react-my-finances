import ExpensesCategoriesValidation from "../ValidationData/ExpensesCategoriesValidation.js";
import ExpensesCategoriesReferring from "../ReferringToMainProcess/ExpensesCategoriesTableReferring.js";

function loadExpensesCategories() {
    ExpensesCategoriesReferring.loadExpensesCategoriesFromMainProcess();
}

function addAndLoadExpenseCategory(expenseCategory) {
    if (ExpensesCategoriesValidation.addAndLoadExpenseCategoryValidation(expenseCategory))
        ExpensesCategoriesReferring.addAndLoadExpenseCategoryFromMainProcess(expenseCategory);
}

export default {
    loadExpensesCategories,
    addAndLoadExpenseCategory
}
