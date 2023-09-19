import EditingToastsValues from "../SupportFunctions/EditingToastsValues.js";
import ValidationValues from "../SupportFunctions/ValidationValues.js";
import DataFromDatabaseStorage from "../Storages/DataFromDatabaseStorage.js";

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
    if (ValidationValues.checkPresenceElementInObjectsArray(dataForExpensesCategoriesTable, 'name', expenseCategory)) {
        EditingToastsValues.changeNotificationText('Данная категория расходов уже существует.');
        EditingToastsValues.showNotification();
        return false;
    }

    return true;
}

function editAndLoadExpenseCategoryValidation(newCategoryName, currentCategoryName) {
    if (newCategoryName === currentCategoryName) {
        EditingToastsValues.changeNotificationText('Название поля не изменено.');
        EditingToastsValues.showNotification();
        return false;
    }

    if (newCategoryName === '') {
        EditingToastsValues.changeNotificationText('Поле с редактируемой категорией расходов не должно быть пустым.');
        EditingToastsValues.showNotification();
        return false;
    }

    if (newCategoryName.length > 50) {
        EditingToastsValues.changeNotificationText('Название редактируемой категории расходов не должно превышать 50 символов.');
        EditingToastsValues.showNotification();
        return false;
    }

    let dataForExpensesCategoriesTable = DataFromDatabaseStorage.$dataForExpensesCategoriesTable.getState();
    let filteredData = ValidationValues.deleteArrayElement(dataForExpensesCategoriesTable, currentCategoryName);
    if (ValidationValues.checkPresenceElementInObjectsArray(filteredData, 'name', newCategoryName)) {
        EditingToastsValues.changeNotificationText('Данная категория расходов уже существует.');
        EditingToastsValues.showNotification();
        return false;
    }

    return true;
}

export default {
    addAndLoadExpenseCategoryValidation,
    editAndLoadExpenseCategoryValidation
}
