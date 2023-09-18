import DataFromDatabaseStorage from "../Storages/DataFromDatabaseStorage.js";
import DownloadProcessStorage from "../Storages/DownloadProcessStorage.js";

function loadDistributionFinancesFromMainProcess() {
    DownloadProcessStorage.setIsLoadingDistributionFinances(true);
    window.databaseManagement.loadDistributionFinances()
        .then((result) => {
            DataFromDatabaseStorage.changeDataForDistributionFinancesTable(result);
            DownloadProcessStorage.setIsLoadingDistributionFinances(false);
        });
}

function addAndLoadDistributionFinancesTypeFromMainProcess(distributionFinancesType) {
    DownloadProcessStorage.setIsLoadingDistributionFinances(true);
    window.databaseManagement.addAndLoadDistributionFinancesType(distributionFinancesType)
        .then((result) => {
            DataFromDatabaseStorage.changeDataForDistributionFinancesTable(result);
            DownloadProcessStorage.setIsLoadingDistributionFinances(false);
        });
}

export default {
    loadDistributionFinancesFromMainProcess,
    addAndLoadDistributionFinancesTypeFromMainProcess
}
