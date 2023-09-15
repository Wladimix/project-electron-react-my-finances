import InputsValuesStorage from "../Storages/InputsValuesStorage.js";

function changeDistributionFinancesType(event) {
    InputsValuesStorage.changeDistributionFinancesType(event.target.value);
}

function changeExpenseCategory(event) {
    InputsValuesStorage.changeExpenseCategory(event.target.value);
}

export default {
    changeDistributionFinancesType,
    changeExpenseCategory
}
