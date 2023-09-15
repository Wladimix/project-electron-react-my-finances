const knex = require("../Database/ConnectionDB.js");
const ExpensesCategoriesModel = require("../Database/Models/ExpensesCategoriesModel.js")
const ExpensesCategoriesProcessing = require("../Database/ProcessingQueryResults/ExpensesCategoriesProcessing.js");

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

module.exports = {
    loadExpensesCategories,
    addAndLoadExpenseCategory
}
