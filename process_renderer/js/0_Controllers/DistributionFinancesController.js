import DistributionFinancesPreProcessing from "../1_DataPreprocessing/DistributionFinancesPreProcessing.js";
import DistributionFinancesValidation from "../2_ValidationData/DistributionFinancesValidation.js";
import DistributionFinancesReferring from "../3_ReferringToMainProcess/DistributionFinancesTableReferring.js";
import InputsValuesStorage from "../Storages/InputsValuesStorage.js";

function loadDistributionFinances() {
    DistributionFinancesReferring.loadDistributionFinancesFromMainProcess();
}

function addAndLoadDistributionFinancesType(distributionFinancesType) {
    distributionFinancesType = DistributionFinancesPreProcessing.addAndLoadDistributionFinancesTypePreprocessing(distributionFinancesType);
    if (DistributionFinancesValidation.addAndLoadDistributionFinancesTypeValidation(distributionFinancesType))
    DistributionFinancesReferring.addAndLoadDistributionFinancesTypeFromMainProcess(distributionFinancesType);
    InputsValuesStorage.changeDistributionFinancesType('');
}

export default {
    loadDistributionFinances,
    addAndLoadDistributionFinancesType
}
