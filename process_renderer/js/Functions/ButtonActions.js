import LoadingData from './LoadingData';
import InputsValuesStorage from '../Storage/InputsValuesStorage';

function addAndUpdateDistributionFinancesType(distributionFinancesTypeName) {
    window.databaseManagement.addDistributionFinancesType(distributionFinancesTypeName).then(() => {
        LoadingData.updateDistributionFinancesTypes();
    });
}

function addAndUpdateExpenseCategory(expenseCategoryName) {
    window.databaseManagement.addExpenseCategory(expenseCategoryName).then(() => {
        LoadingData.updateExpensesCategories();
    });
}

function addAndUpdateOperation(nameOperationValue, sumOperationValue, firstOperationCategoryId, secondOperationCategoryId, operationType) {
    window.databaseManagement.addOperation(nameOperationValue, sumOperationValue, firstOperationCategoryId, secondOperationCategoryId, operationType).then(() => {
        InputsValuesStorage.setNameOperationValue('');
        InputsValuesStorage.setSumOperationValue('');
        LoadingData.updateBudgetUnits();
        LoadingData.updateOperations();
    });
}

export default {
    addAndUpdateDistributionFinancesType,
    addAndUpdateExpenseCategory,
    addAndUpdateOperation
}
