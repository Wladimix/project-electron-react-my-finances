import ValidationValues from "../SupportFunctions/ValidationValues.js"

function addAndLoadExpenseCategoryPreprocessing(expenseCategory) {
    return ValidationValues.removeExtraSpaces(expenseCategory);
}

function editAndLoadExpenseCategoryPreprocessing(newCategoryName) {
    return ValidationValues.removeExtraSpaces(newCategoryName);
}

function deleteAndLoadExpenseCategoryPreprocessing(expenseCategory) {
    return ValidationValues.removeExtraSpaces(expenseCategory);
}

export default {
    addAndLoadExpenseCategoryPreprocessing,
    editAndLoadExpenseCategoryPreprocessing,
    deleteAndLoadExpenseCategoryPreprocessing
}
