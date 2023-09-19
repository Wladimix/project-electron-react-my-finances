import ValidationValues from "../SupportFunctions/ValidationValues.js"

function addAndLoadDistributionFinancesTypePreprocessing(distributionFinancesType) {
    return ValidationValues.removeExtraSpaces(distributionFinancesType);
}

function editAndLoadDistributionFinancesTypePreprocessing(newTypeName) {
    return ValidationValues.removeExtraSpaces(newTypeName);
}

function deleteAndLoadDistributionFinancesTypePreprocessing(distributionFinancesType) {
    return ValidationValues.removeExtraSpaces(distributionFinancesType);
}

export default {
    addAndLoadDistributionFinancesTypePreprocessing,
    editAndLoadDistributionFinancesTypePreprocessing,
    deleteAndLoadDistributionFinancesTypePreprocessing
}
