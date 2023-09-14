import DistributionFinancesValidation from "../ValidationData/DistributionFinancesValidation.js";
import DistributionFinancesReferring from "../ReferringToMainProcess/DistributionFinancesTableReferring.js";

function loadDistributionFinances() {
    DistributionFinancesReferring.loadDistributionFinancesFromMainProcess();
}

function addAndLoadDistributionFinancesType(distributionFinancesType) {
    if (DistributionFinancesValidation.addAndLoadDistributionFinancesTypeValidation(distributionFinancesType))
    DistributionFinancesReferring.addAndLoadDistributionFinancesTypeFromMainProcess(distributionFinancesType);
}

export default {
    loadDistributionFinances,
    addAndLoadDistributionFinancesType
}
