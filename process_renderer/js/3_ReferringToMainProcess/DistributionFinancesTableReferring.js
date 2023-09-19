import DataFromDatabaseStorage from "../Storages/DataFromDatabaseStorage.js";
import DownloadProcessStorage from "../Storages/DownloadProcessStorage.js";

function loadDistributionFinancesFromMainProcess() {
    DownloadProcessStorage.setIsLoadingDistributionFinancesAfterAdding(true);
    window.databaseManagement.loadDistributionFinances()
        .then((result) => {
            DataFromDatabaseStorage.changeDataForDistributionFinancesTable(result);
            DownloadProcessStorage.setIsLoadingDistributionFinancesAfterAdding(false);
        });
}

function addAndLoadDistributionFinancesTypeFromMainProcess(distributionFinancesType) {
    DownloadProcessStorage.setIsLoadingDistributionFinancesAfterAdding(true);
    window.databaseManagement.addAndLoadDistributionFinancesType(distributionFinancesType)
        .then((result) => {
            DataFromDatabaseStorage.changeDataForDistributionFinancesTable(result);
            DownloadProcessStorage.setIsLoadingDistributionFinancesAfterAdding(false);
        });
}

function editAndLoadDistributionFinancesTypeFromMainProcess(newTypeName, currentTypeName) {
    DownloadProcessStorage.setIsLoadingDistributionFinancesAfterEditing(true);
    window.databaseManagement.editAndLoadDistributionFinancesType(newTypeName, currentTypeName)
        .then((result) => {
            DataFromDatabaseStorage.changeDataForDistributionFinancesTable(result);
            DownloadProcessStorage.setIsLoadingDistributionFinancesAfterEditing(false);
        });
}

export default {
    loadDistributionFinancesFromMainProcess,
    addAndLoadDistributionFinancesTypeFromMainProcess,
    editAndLoadDistributionFinancesTypeFromMainProcess
}
