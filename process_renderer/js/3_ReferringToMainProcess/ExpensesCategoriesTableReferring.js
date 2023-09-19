import DataFromDatabaseStorage from "../Storages/DataFromDatabaseStorage.js";
import DownloadProcessStorage from "../Storages/DownloadProcessStorage.js";

function loadExpensesCategoriesFromMainProcess() {
    DownloadProcessStorage.setIsLoadingExpensesCategoriesAfterAdding(true);
    window.databaseManagement.loadExpensesCategories()
        .then((result) => {
            DataFromDatabaseStorage.changeDataForExpensesCategoriesTable(result);
            DownloadProcessStorage.setIsLoadingExpensesCategoriesAfterAdding(false);
        });
}

function addAndLoadExpenseCategoryFromMainProcess(expenseCategory) {
    DownloadProcessStorage.setIsLoadingExpensesCategoriesAfterAdding(true);
    window.databaseManagement.addAndLoadExpenseCategory(expenseCategory)
        .then((result) => {
            DataFromDatabaseStorage.changeDataForExpensesCategoriesTable(result);
            DownloadProcessStorage.setIsLoadingExpensesCategoriesAfterAdding(false);
        });
}

function editAndLoadExpenseCategoryFromMainProcess(newCategoryName, currentCategoryName) {
    DownloadProcessStorage.setIsLoadingExpensesCategoriesAfterEditing(true);
    window.databaseManagement.editAndLoadExpenseCategory(newCategoryName, currentCategoryName)
        .then((result) => {
            DataFromDatabaseStorage.changeDataForExpensesCategoriesTable(result);
            DownloadProcessStorage.setIsLoadingExpensesCategoriesAfterEditing(false);
        });
}

function deleteAndLoadExpenseCategoryFromMainProcess(expenseCategory) {
    DownloadProcessStorage.setIsLoadingExpensesCategoriesAfterEditing(true);
    window.databaseManagement.deleteAndLoadExpenseCategory(expenseCategory)
        .then((result) => {
            DataFromDatabaseStorage.changeDataForExpensesCategoriesTable(result);
            DownloadProcessStorage.setIsLoadingExpensesCategoriesAfterEditing(false);
        });
}

export default {
    loadExpensesCategoriesFromMainProcess,
    addAndLoadExpenseCategoryFromMainProcess,
    editAndLoadExpenseCategoryFromMainProcess,
    deleteAndLoadExpenseCategoryFromMainProcess
}
