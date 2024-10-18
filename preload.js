const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
    getAllDistributionTypes: () => ipcRenderer.invoke("get-all-distribution-types"),
    addDistributionType: data => ipcRenderer.invoke("add-distribution-type", data),
    editDistributionType: data => ipcRenderer.invoke("edit-distribution-type", data),
    deleteDistributionType: id => ipcRenderer.invoke("delete-distribution-type", id)
});
