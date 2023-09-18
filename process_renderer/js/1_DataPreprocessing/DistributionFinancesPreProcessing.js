import ValidationValues from "../SupportFunctions/ValidationValues.js"

function addAndLoadDistributionFinancesTypePreprocessing(distributionFinancesType) {
    return ValidationValues.removeExtraSpaces(distributionFinancesType);
}

export default {
    addAndLoadDistributionFinancesTypePreprocessing
}
