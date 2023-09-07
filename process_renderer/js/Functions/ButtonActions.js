import LoadingData from './LoadingData';
import InputsValuesStorage from '../Storage/InputsValuesStorage';

function addAndUpdateDistributionFinancesType(distributionFinancesTypeName) {
    window.databaseManagement.addDistributionFinancesType(distributionFinancesTypeName).then(() => {
        LoadingData.updateDistributionFinancesTypes();
    });
}

function addAndUpdateExpenseType(expenceTypeName) {
    window.databaseManagement.addExpenseType(expenceTypeName).then(() => {
        LoadingData.updateExpensesTypes();
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
    addAndUpdateExpenseType,
    addAndUpdateOperation
}
