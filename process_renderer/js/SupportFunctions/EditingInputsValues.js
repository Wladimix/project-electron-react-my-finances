import InputsValuesStorage from "../Storages/InputsValuesStorage.js";

function changeDistributionFinancesType(event) {
    InputsValuesStorage.changeDistributionFinancesType(event.target.value);
}

export default {
    changeDistributionFinancesType
}
