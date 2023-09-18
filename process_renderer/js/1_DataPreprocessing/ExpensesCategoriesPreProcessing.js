import ValidationValues from "../SupportFunctions/ValidationValues.js"

function addAndLoadExpenseCategoryPreprocessing(expenseCategory) {
    return ValidationValues.removeExtraSpaces(expenseCategory);
}

export default {
    addAndLoadExpenseCategoryPreprocessing
}
