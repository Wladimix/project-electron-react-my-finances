import ExpensesCategoriesPreProcessing from "../1_DataPreprocessing/ExpensesCategoriesPreProcessing.js";
import ExpensesCategoriesValidation from "../2_ValidationData/ExpensesCategoriesValidation.js";
import ExpensesCategoriesReferring from "../3_ReferringToMainProcess/ExpensesCategoriesTableReferring.js";
import InputsValuesStorage from "../Storages/InputsValuesStorage.js";

import { ANIMATION_TIME } from "../RendererConstants.js";

function loadExpensesCategories() {
    ExpensesCategoriesReferring.loadExpensesCategoriesFromMainProcess();
}

function addAndLoadExpenseCategory(expenseCategory) {
    expenseCategory = ExpensesCategoriesPreProcessing.addAndLoadExpenseCategoryPreprocessing(expenseCategory);
    if (ExpensesCategoriesValidation.addAndLoadExpenseCategoryValidation(expenseCategory))
    ExpensesCategoriesReferring.addAndLoadExpenseCategoryFromMainProcess(expenseCategory);
    InputsValuesStorage.changeAddedExpenseCategory('');
}

function editAndLoadExpenseCategory(newCategoryName, currentCategoryName) {
    newCategoryName = ExpensesCategoriesPreProcessing.editAndLoadExpenseCategoryPreprocessing(newCategoryName);
    if (ExpensesCategoriesValidation.editAndLoadExpenseCategoryValidation(newCategoryName, currentCategoryName))
    setTimeout(() => {
        ExpensesCategoriesReferring.editAndLoadExpenseCategoryFromMainProcess(newCategoryName, currentCategoryName);
    }, ANIMATION_TIME);
}

function deleteAndLoadExpenseCategory(expenseCategory) {
    expenseCategory = ExpensesCategoriesPreProcessing.deleteAndLoadExpenseCategoryPreprocessing(expenseCategory);
    setTimeout(() => {
        ExpensesCategoriesReferring.deleteAndLoadExpenseCategoryFromMainProcess(expenseCategory);
    }, ANIMATION_TIME);
}

export default {
    loadExpensesCategories,
    addAndLoadExpenseCategory,
    editAndLoadExpenseCategory,
    deleteAndLoadExpenseCategory
}
