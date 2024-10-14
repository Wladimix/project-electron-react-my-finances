const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
    addDistributionType: (name, amount) => ipcRenderer.invoke("add-distribution-type", name, amount)
});
