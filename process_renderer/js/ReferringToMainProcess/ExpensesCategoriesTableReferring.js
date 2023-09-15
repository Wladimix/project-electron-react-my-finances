import DataFromDatabaseStorage from "../Storages/DataFromDatabaseStorage.js";
import DownloadProcessStorage from "../Storages/DownloadProcessStorage.js";

function loadExpensesCategoriesFromMainProcess() {
    DownloadProcessStorage.setIsLoadingExpensesCategories(true);
    window.databaseManagement.loadExpensesCategories()
        .then((result) => {
            DataFromDatabaseStorage.changeDataForExpensesCategoriesTable(result);
            DownloadProcessStorage.setIsLoadingExpensesCategories(false);
        });
}

function addAndLoadExpenseCategoryFromMainProcess(expenseCategory) {
    DownloadProcessStorage.setIsLoadingExpensesCategories(true);
    window.databaseManagement.addAndLoadExpenseCategory(expenseCategory)
        .then((result) => {
            DataFromDatabaseStorage.changeDataForExpensesCategoriesTable(result);
            DownloadProcessStorage.setIsLoadingExpensesCategories(false);
        });
}

export default {
    loadExpensesCategoriesFromMainProcess,
    addAndLoadExpenseCategoryFromMainProcess
}
