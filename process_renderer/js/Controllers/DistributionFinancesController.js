import DistributionFinancesValidation from "../ValidationData/DistributionFinancesValidation.js";
import DistributionFinancesReferring from "../ReferringToMainProcess/DistributionFinancesTableReferring.js";
import InputsValuesStorage from "../Storages/InputsValuesStorage.js";

function loadDistributionFinances() {
    DistributionFinancesReferring.loadDistributionFinancesFromMainProcess();
}

function addAndLoadDistributionFinancesType(distributionFinancesType) {
    if (DistributionFinancesValidation.addAndLoadDistributionFinancesTypeValidation(distributionFinancesType))
    DistributionFinancesReferring.addAndLoadDistributionFinancesTypeFromMainProcess(distributionFinancesType);
    InputsValuesStorage.changeDistributionFinancesType('');
}

export default {
    loadDistributionFinances,
    addAndLoadDistributionFinancesType
}
