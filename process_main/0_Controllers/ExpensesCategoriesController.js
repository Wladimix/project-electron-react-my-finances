const ExpensesCategoriesModel = require("../1_Models/ExpensesCategoriesModel.js")
const ExpensesCategoriesProcessing = require("../2_ProcessingQueryResults/ExpensesCategoriesProcessing.js");
const knex = require("../ConnectionDB.js");

function loadExpensesCategories() {
    let getExpensesCategoriesPromise = ExpensesCategoriesModel.getExpensesCategories(knex);
    let getExpensesCategoriesProcessingPromise = ExpensesCategoriesProcessing.getExpensesCategoriesProcessing(getExpensesCategoriesPromise);

    return getExpensesCategoriesProcessingPromise;
}

function addAndLoadExpenseCategory(expenseCategoryName) {
    let addExpenseCategoryPromise = ExpensesCategoriesModel.addExpenseCategory(knex, expenseCategoryName);
    let addExpenseCategoryProcessingPromise = ExpensesCategoriesProcessing.addExpenseCategoryProcessing(addExpenseCategoryPromise);

    let getExpensesCategoriesPromise = ExpensesCategoriesModel.getExpensesCategories(knex, addExpenseCategoryProcessingPromise);
    let getExpensesCategoriesProcessingPromise = ExpensesCategoriesProcessing.getExpensesCategoriesProcessing(getExpensesCategoriesPromise);

    return getExpensesCategoriesProcessingPromise;
}

function editAndLoadExpenseCategory(newCategoryName, currentCategoryName) {
    let editExpenseCategoryPromise = ExpensesCategoriesModel.editExpenseCategory(knex, newCategoryName, currentCategoryName)
    let editExpenseCategoryProcessingPromise = ExpensesCategoriesProcessing.editExpenseCategoryProcessing(editExpenseCategoryPromise)

    let getExpensesCategoriesPromise = ExpensesCategoriesModel.getExpensesCategories(knex, editExpenseCategoryProcessingPromise);
    let getExpensesCategoriesProcessingPromise = ExpensesCategoriesProcessing.getExpensesCategoriesProcessing(getExpensesCategoriesPromise);

    return getExpensesCategoriesProcessingPromise;
}

function deleteAndLoadExpenseCategory(expenseCategoryName) {
    let deleteExpenseCategoryPromise = ExpensesCategoriesModel.deleteExpenseCategory(knex, expenseCategoryName)
    let deleteExpenseCategoryProcessingPromise = ExpensesCategoriesProcessing.deleteExpenseCategoryProcessing(deleteExpenseCategoryPromise)

    let getExpensesCategoriesPromise = ExpensesCategoriesModel.getExpensesCategories(knex, deleteExpenseCategoryProcessingPromise);
    let getExpensesCategoriesProcessingPromise = ExpensesCategoriesProcessing.getExpensesCategoriesProcessing(getExpensesCategoriesPromise);

    return getExpensesCategoriesProcessingPromise;
}

module.exports = {
    loadExpensesCategories,
    addAndLoadExpenseCategory,
    editAndLoadExpenseCategory,
    deleteAndLoadExpenseCategory
}
