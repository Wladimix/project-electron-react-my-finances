const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('databaseManagement', {
    getDistributionFinancesTypes: () => ipcRenderer.invoke('get-distribution-finances-types'),
    addDistributionFinancesType: (distributionFinancesTypeName) => ipcRenderer.invoke('add-distribution-finances-type', distributionFinancesTypeName),

    getExpensesTypes: () => ipcRenderer.invoke('get-expenses-types'),
    addExpenseType: (expenceTypeName) => ipcRenderer.invoke('add-expense-type', expenceTypeName),

    getBudgetUnits: () => ipcRenderer.invoke('get-budget-units'),

    getOperations: () => {},
    addOperation: (newUnitName, newOperationSum, firstOperationCategoryId, secondOperationCategoryId) => ipcRenderer.invoke('add-operation-and-unit', newUnitName, newOperationSum, firstOperationCategoryId, secondOperationCategoryId)
});
