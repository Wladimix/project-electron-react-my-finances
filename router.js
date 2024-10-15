const DistributionController = require('@main/DistributionFinances/DistributionController.js');

const { ipcMain } = require("electron");

function useRouter() {
    ipcMain.handle("get-all-distribution-types", DistributionController.getAllDistributionTypes);
    ipcMain.handle("add-distribution-type", DistributionController.addDistributionType);
}

module.exports = useRouter;
