const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('databaseManagement', {
    getDistributionFinancesTypes: () => ipcRenderer.invoke('get-distribution-finances-types'),
    addDistributionFinancesType: (distributionFinancesTypeName) => ipcRenderer.invoke('add-distribution-finances-type', distributionFinancesTypeName),

    getExpensesCategories: () => ipcRenderer.invoke('get-expenses-categories'),
    addExpenseCategory: (expenceCategoryName) => ipcRenderer.invoke('add-expense-categories', expenceCategoryName),

    getBudgetUnits: () => ipcRenderer.invoke('get-budget-units'),

    getOperations: () => ipcRenderer.invoke('get-operations'),
    addOperation: (newUnitName, newOperationSum, firstOperationCategoryId, secondOperationCategoryId, operationType) => ipcRenderer.invoke('add-operation-and-unit', newUnitName, newOperationSum, firstOperationCategoryId, secondOperationCategoryId, operationType)
});
