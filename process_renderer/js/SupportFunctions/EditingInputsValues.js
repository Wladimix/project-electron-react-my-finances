import InputsValuesStorage from "../Storages/InputsValuesStorage.js";

function changeAddedDistributionFinancesType(event) {
    InputsValuesStorage.changeAddedDistributionFinancesType(event.target.value);
}

function changeEditableDistributionFinancesType(event) {
    InputsValuesStorage.changeEditableDistributionFinancesType(event.target.value);
}

function changeAddedExpenseCategory(event) {
    InputsValuesStorage.changeAddedExpenseCategory(event.target.value);
}

function changeEditableExpenseCategory(event) {
    InputsValuesStorage.changeEditableExpenseCategory(event.target.value);
}

export default {
    changeAddedDistributionFinancesType,
    changeEditableDistributionFinancesType,
    changeAddedExpenseCategory,
    changeEditableExpenseCategory
}
