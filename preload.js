const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {

    getAllDistributionTypes: () => ipcRenderer.invoke("get-all-distribution-types"),
    addDistributionType: data => ipcRenderer.invoke("add-distribution-type", data),
    editDistributionType: data => ipcRenderer.invoke("edit-distribution-type", data),
    deleteDistributionType: data => ipcRenderer.invoke("delete-distribution-type", data),

    getAllCategories: () => ipcRenderer.invoke("get-all-categories"),
    addCategory: name => ipcRenderer.invoke("add-category", name),
    editCategory: data => ipcRenderer.invoke("edit-category", data),
    deleteCategory: data => ipcRenderer.invoke("delete-category", data),

    getAllTransactions: date => ipcRenderer.invoke("get-all-transactions", date),
    addTransaction: data => ipcRenderer.invoke("add-transaction", data),
    editTransaction: data => ipcRenderer.invoke("edit-transaction", data),
    deleteTransaction: data => ipcRenderer.invoke("delete-transaction", data),
    getAllTransactionDates: () => ipcRenderer.invoke("get-all-dates"),

    getAllNotes: substring => ipcRenderer.invoke("get-all-notes", substring)

});
