const DistributionController = require('@main/DistributionFinances/DistributionController.js');

const { ipcMain } = require("electron");

function useRouter() {
    ipcMain.handle("add-distribution-type", DistributionController.addDistributionType);
}

module.exports = useRouter;
