import EditingToastsValues from "../SupportFunctions/EditingToastsValues.js";
import ValidationValues from "../SupportFunctions/ValidationValues.js";
import DataFromDatabaseStorage from "../Storages/DataFromDatabaseStorage.js";

function addAndLoadDistributionFinancesTypeValidation(distributionFinancesType) {
    if (distributionFinancesType === '') {
        EditingToastsValues.changeNotificationText('Поле с новым типом распределения финансов не должно быть пустым.');
        EditingToastsValues.showNotification();
        return false;
    }

    if (distributionFinancesType.length > 50) {
        EditingToastsValues.changeNotificationText('Название нового типа распределения финансов не должно превышать 50 символов.');
        EditingToastsValues.showNotification();
        return false;
    }
    
    let dataForDistributionFinancesTable = DataFromDatabaseStorage.$dataForDistributionFinancesTable.getState();
    if (ValidationValues.checkPresenceElementInObjectsArray(dataForDistributionFinancesTable, 'name', distributionFinancesType)) {
        EditingToastsValues.changeNotificationText('Данный тип распределения финансов уже существует.');
        EditingToastsValues.showNotification();
        return false;
    }

    return true;
}

function editAndLoadDistributionFinancesTypeValidation(newTypeName, currentTypeName) {
    if (newTypeName === currentTypeName) {
        EditingToastsValues.changeNotificationText('Название поля не изменено.');
        EditingToastsValues.showNotification();
        return false;
    }

    if (newTypeName === '') {
        EditingToastsValues.changeNotificationText('Поле с редактируемым типом распределения финансов не должно быть пустым.');
        EditingToastsValues.showNotification();
        return false;
    }

    if (newTypeName.length > 50) {
        EditingToastsValues.changeNotificationText('Название редактируемого типа распределения финансов не должно превышать 50 символов.');
        EditingToastsValues.showNotification();
        return false;
    }

    let dataForDistributionFinancesTable = DataFromDatabaseStorage.$dataForDistributionFinancesTable.getState();
    let filteredData = ValidationValues.deleteArrayElement(dataForDistributionFinancesTable, currentTypeName);
    if (ValidationValues.checkPresenceElementInObjectsArray(filteredData, 'name', newTypeName)) {
        EditingToastsValues.changeNotificationText('Данный тип распределения финансов уже существует.');
        EditingToastsValues.showNotification();
        return false;
    }

    return true;
}

export default {
    addAndLoadDistributionFinancesTypeValidation,
    editAndLoadDistributionFinancesTypeValidation
}
