const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('databaseManagement', {
    loadDistributionFinances: () => ipcRenderer.invoke('load-distribution-finances'),
    addAndLoadDistributionFinancesType: (distributionFinancesTypeName) => ipcRenderer.invoke('add-and-load-distribution-finances-type', distributionFinancesTypeName),

    loadExpensesCategories: () => ipcRenderer.invoke('load-expenses-categories'),
    addAndLoadExpenseCategory: (expenseCategoryName) => ipcRenderer.invoke('add-and-load-expense-category', expenseCategoryName),
});
