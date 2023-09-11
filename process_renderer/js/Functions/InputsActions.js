import InputsValuesStorage from '../Storage/InputsValuesStorage';

function changeOfDistributionFinancesTypeValue(event) {
    InputsValuesStorage.setDistributionFinancesTypeValue(event.target.value);
}

function changeOfExpenseCategoryValue(event) {
    InputsValuesStorage.setExpenseCategoryValue(event.target.value);
}

function changeOfNameOperationValue(newValue) {
    if (newValue === null) InputsValuesStorage.setNameOperationValue('')
    else InputsValuesStorage.setNameOperationValue(newValue.label);
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
    changeOfExpenseCategoryValue,
    changeOfNameOperationValue,
    changeOfSumOperationValue,
    changeOfFirstOperationCategoryValue,
    changeOfSecondOperationCategoryValue
}
