import UploadedDataStorage from '../Storage/UploadedDataStorage';

function updateDistributionFinancesTypes() {
    window.databaseManagement.getDistributionFinancesTypes().then((result) => {
        UploadedDataStorage.setDistributionFinancesTypes(result);
    });
}

function updateExpensesTypes() {
    window.databaseManagement.getExpensesTypes().then((result) => {
        UploadedDataStorage.setExpensesTypes(result);
    });
}

function updateBudgetUnits() {
    window.databaseManagement.getBudgetUnits().then((result) => {
        UploadedDataStorage.setBudgetUnits(result);
    });
}

export default {
    updateDistributionFinancesTypes,
    updateExpensesTypes,
    updateBudgetUnits
}
