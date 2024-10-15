const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
    getAllDistributionTypes: () => ipcRenderer.invoke("get-all-distribution-types"),
    addDistributionType: (name, amount) => ipcRenderer.invoke("add-distribution-type", name, amount)
});
