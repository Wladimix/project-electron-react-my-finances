const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('databaseManagement', {
    getExpensesTypes: () => ipcRenderer.invoke('get-expenses-types'),
    addExpenseType: () => ipcRenderer.invoke('add-expense-type'),

    getBudgetUnits: () => ipcRenderer.invoke('get-budget-units'),

    getOperations: () => {},
    addOperation: (newUnitName) => ipcRenderer.invoke('add-operation-and-unit', newUnitName)
});
