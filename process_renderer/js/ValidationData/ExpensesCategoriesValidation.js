import EditingToastsValues from "../SupportFunctions/EditingToastsValues.js";
import ValidationValues from "../SupportFunctions/ValidationValues.js";
import DataFromDatabaseStorage from "../Storages/DataFromDatabaseStorage.js";
import InputsValuesStorage from "../Storages/InputsValuesStorage.js";

function addAndLoadExpenseCategoryValidation(expenseCategory) {
    if (expenseCategory === '') {
        EditingToastsValues.changeNotificationText('Поле с новой категорией расходов не должно быть пустым.');
        EditingToastsValues.showNotification();
        return false;
    }

    if (expenseCategory.length > 50) {
        EditingToastsValues.changeNotificationText('Название новой категории расходов не должно превышать 50 символов.');
        EditingToastsValues.showNotification();
        return false;
    }

    let dataForExpensesCategoriesTable = DataFromDatabaseStorage.$dataForExpensesCategoriesTable.getState();
    let expenseCategoryValue = InputsValuesStorage.$expenseCategory.getState();
    if (ValidationValues.findElementInObjectsArray(dataForExpensesCategoriesTable, 'name', expenseCategoryValue)) {
        EditingToastsValues.changeNotificationText('Данная категория расходов уже существует.');
        EditingToastsValues.showNotification();
        return false;
    }

    return true;
}

export default {
    addAndLoadExpenseCategoryValidation
}
