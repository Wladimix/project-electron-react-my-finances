const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {

    getAllDistributionTypes: () => ipcRenderer.invoke("get-all-distribution-types"),
    addDistributionType: data => ipcRenderer.invoke("add-distribution-type", data),
    editDistributionType: data => ipcRenderer.invoke("edit-distribution-type", data),
    deleteDistributionType: id => ipcRenderer.invoke("delete-distribution-type", id),

    getAllCategories: () => ipcRenderer.invoke("get-all-categories"),
    addCategory: name => ipcRenderer.invoke("add-category", name),
    editCategory: data => ipcRenderer.invoke("edit-category", data),
    deleteCategory: id => ipcRenderer.invoke("delete-category", id),

    getAllTransactions: () => ipcRenderer.invoke("get-all-transactions")

});
