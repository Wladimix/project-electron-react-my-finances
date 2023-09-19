import DistributionFinancesPreProcessing from "../1_DataPreprocessing/DistributionFinancesPreProcessing.js";
import DistributionFinancesValidation from "../2_ValidationData/DistributionFinancesValidation.js";
import DistributionFinancesReferring from "../3_ReferringToMainProcess/DistributionFinancesTableReferring.js";
import InputsValuesStorage from "../Storages/InputsValuesStorage.js";

import { ANIMATION_TIME } from "../RendererConstants.js";

function loadDistributionFinances() {
    DistributionFinancesReferring.loadDistributionFinancesFromMainProcess();
}

function addAndLoadDistributionFinancesType(distributionFinancesType) {
    distributionFinancesType = DistributionFinancesPreProcessing.addAndLoadDistributionFinancesTypePreprocessing(distributionFinancesType);
    if (DistributionFinancesValidation.addAndLoadDistributionFinancesTypeValidation(distributionFinancesType))
    DistributionFinancesReferring.addAndLoadDistributionFinancesTypeFromMainProcess(distributionFinancesType);
    InputsValuesStorage.changeAddedDistributionFinancesType('');
}

function editAndLoadDistributionFinancesType(newTypeName, currentTypeName) {
    newTypeName = DistributionFinancesPreProcessing.editAndLoadDistributionFinancesTypePreprocessing(newTypeName);
    if (DistributionFinancesValidation.editAndLoadDistributionFinancesTypeValidation(newTypeName, currentTypeName))
    setTimeout(() => {
        DistributionFinancesReferring.editAndLoadDistributionFinancesTypeFromMainProcess(newTypeName, currentTypeName);
    }, ANIMATION_TIME);
}

function deleteAndLoadDistributionFinancesType(distributionFinancesType) {
    distributionFinancesType = DistributionFinancesPreProcessing.editAndLoadDistributionFinancesTypePreprocessing(distributionFinancesType);
    setTimeout(() => {
        DistributionFinancesReferring.deleteAndLoadDistributionFinancesTypeFromMainProcess(distributionFinancesType);
    }, ANIMATION_TIME);
}

export default {
    loadDistributionFinances,
    addAndLoadDistributionFinancesType,
    editAndLoadDistributionFinancesType,
    deleteAndLoadDistributionFinancesType
}
