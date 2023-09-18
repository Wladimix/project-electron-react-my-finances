import ExpensesCategoriesPreProcessing from "../1_DataPreprocessing/ExpensesCategoriesPreProcessing.js";
import ExpensesCategoriesValidation from "../2_ValidationData/ExpensesCategoriesValidation.js";
import ExpensesCategoriesReferring from "../3_ReferringToMainProcess/ExpensesCategoriesTableReferring.js";
import InputsValuesStorage from "../Storages/InputsValuesStorage.js";

function loadExpensesCategories() {
    ExpensesCategoriesReferring.loadExpensesCategoriesFromMainProcess();
}

function addAndLoadExpenseCategory(expenseCategory) {
    expenseCategory = ExpensesCategoriesPreProcessing.addAndLoadExpenseCategoryPreprocessing(expenseCategory);
    if (ExpensesCategoriesValidation.addAndLoadExpenseCategoryValidation(expenseCategory))
    ExpensesCategoriesReferring.addAndLoadExpenseCategoryFromMainProcess(expenseCategory);
    InputsValuesStorage.changeExpenseCategory('');
}

export default {
    loadExpensesCategories,
    addAndLoadExpenseCategory
}
