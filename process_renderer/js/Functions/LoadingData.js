import UploadedDataStorage from '../Storage/UploadedDataStorage';

function updateBudgetUnits() {
    window.databaseManagement.getBudgetUnits().then((result) => {
        UploadedDataStorage.setBudgetUnits(result);
    });
}

export default {
    updateBudgetUnits
}
