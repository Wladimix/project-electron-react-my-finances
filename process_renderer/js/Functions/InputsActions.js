import InputsValuesStorage from '../Storage/InputsValuesStorage';

function changeOfDistributionFinancesTypeValue(event) {
    InputsValuesStorage.setDistributionFinancesTypeValue(event.target.value);
}

function changeOfExpenseTypeValue(event) {
    InputsValuesStorage.setExpenseTypeValue(event.target.value);
}

function changeOfNameOperationValue(newValue) {
    InputsValuesStorage.setNameOperationValue(newValue);
}

function changeOfSumOperationValue(event) {
    InputsValuesStorage.setSumOperationValue(event.target.value);
}

function changeOfFirstOperationCategoryValue(newValue) {
    InputsValuesStorage.setFirstOperationCategoryValue(newValue);
}

function changeOfSecondOperationCategoryValue(newValue) {
    InputsValuesStorage.setSecondOperationCategoryValue(newValue);
}

export default {
    changeOfDistributionFinancesTypeValue,
    changeOfExpenseTypeValue,
    changeOfNameOperationValue,
    changeOfSumOperationValue,
    changeOfFirstOperationCategoryValue,
    changeOfSecondOperationCategoryValue
}
