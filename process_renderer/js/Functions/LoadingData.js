import UploadedDataStorage from '../Storage/UploadedDataStorage';

function loadingAllData() {
    updateDistributionFinancesTypes();
    updateExpensesCategories();
    updateBudgetUnits();
    updateOperations();
}

function updateDistributionFinancesTypes() {
    window.databaseManagement.getDistributionFinancesTypes().then((result) => {
        UploadedDataStorage.setDistributionFinancesTypes(result);
    });
}

function updateExpensesCategories() {
    window.databaseManagement.getExpensesCategories().then((result) => {
        UploadedDataStorage.setExpensesCategories(result);
    });
}

function updateBudgetUnits() {
    window.databaseManagement.getBudgetUnits().then((result) => {
        UploadedDataStorage.setBudgetUnits(result);
        console.log(result);
    });
}

function updateOperations() {
    window.databaseManagement.getOperations().then((result) => {
        console.log(result);
    })
}

export default {
    loadingAllData,
    updateDistributionFinancesTypes,
    updateExpensesCategories,
    updateBudgetUnits,
    updateOperations
}
