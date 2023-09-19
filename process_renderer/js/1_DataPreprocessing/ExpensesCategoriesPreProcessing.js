import ValidationValues from "../SupportFunctions/ValidationValues.js"

function addAndLoadExpenseCategoryPreprocessing(expenseCategory) {
    return ValidationValues.removeExtraSpaces(expenseCategory);
}

function editAndLoadExpenseCategoryPreprocessing(newCategoryName) {
    return ValidationValues.removeExtraSpaces(newCategoryName);
}

export default {
    addAndLoadExpenseCategoryPreprocessing,
    editAndLoadExpenseCategoryPreprocessing
}
