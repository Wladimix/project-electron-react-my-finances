import ExpensesCategoriesValidation from "../ValidationData/ExpensesCategoriesValidation.js";
import ExpensesCategoriesReferring from "../ReferringToMainProcess/ExpensesCategoriesTableReferring.js";
import InputsValuesStorage from "../Storages/InputsValuesStorage.js";

function loadExpensesCategories() {
    ExpensesCategoriesReferring.loadExpensesCategoriesFromMainProcess();
}

function addAndLoadExpenseCategory(expenseCategory) {
    if (ExpensesCategoriesValidation.addAndLoadExpenseCategoryValidation(expenseCategory))
    ExpensesCategoriesReferring.addAndLoadExpenseCategoryFromMainProcess(expenseCategory);
    InputsValuesStorage.changeExpenseCategory('');
}

export default {
    loadExpensesCategories,
    addAndLoadExpenseCategory
}
