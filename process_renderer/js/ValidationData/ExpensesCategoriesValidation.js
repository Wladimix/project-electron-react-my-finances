import EditingToastsValues from "../SupportFunctions/EditingToastsValues.js";

function addAndLoadExpenseCategoryValidation(expenseCategory) {
    if (expenseCategory === '') {
        EditingToastsValues.changeNotificationText('Поле с новой категорией расходов не должно быть пустым.');
        EditingToastsValues.showNotification();
        return false;
    }

    return true;
}

export default {
    addAndLoadExpenseCategoryValidation
}
