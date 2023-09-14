import EditingToastsValues from "../SupportFunctions/EditingToastsValues.js";

function addAndLoadDistributionFinancesTypeValidation(distributionFinancesType) {
    if (distributionFinancesType === '') {
        EditingToastsValues.changeNotificationText('Поле с новым типом распределения финансов не должно быть пустым.');
        EditingToastsValues.showNotification();
        return false;
    }

    return true;
}

export default {
    addAndLoadDistributionFinancesTypeValidation
}
