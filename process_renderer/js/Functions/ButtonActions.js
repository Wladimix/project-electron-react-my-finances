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

function addAndUpdateOperation(nameOperationValue, sumOperationValue, firstOperationCategoryId, secondOperationCategoryId) {
    window.databaseManagement.addOperation(nameOperationValue, sumOperationValue, firstOperationCategoryId, secondOperationCategoryId).then(() => {
        InputsValuesStorage.setNameOperationValue('');
        InputsValuesStorage.setSumOperationValue('');
        LoadingData.updateBudgetUnits();
    });
}

export default {
    addAndUpdateDistributionFinancesType,
    addAndUpdateExpenseCategory,
    addAndUpdateOperation
}
