import EditingToastsValues from "../SupportFunctions/EditingToastsValues.js";
import ValidationValues from "../SupportFunctions/ValidationValues.js";
import DataFromDatabaseStorage from "../Storages/DataFromDatabaseStorage.js";
import InputsValuesStorage from "../Storages/InputsValuesStorage.js";

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
    let distributionFinancesTypeValue = InputsValuesStorage.$distributionFinancesType.getState();
    if (ValidationValues.findElementInObjectsArray(dataForDistributionFinancesTable, 'name', distributionFinancesTypeValue)) {
        EditingToastsValues.changeNotificationText('Данный тип распределения финансов уже существует.');
        EditingToastsValues.showNotification();
        return false;
    }

    return true;
}

export default {
    addAndLoadDistributionFinancesTypeValidation
}
