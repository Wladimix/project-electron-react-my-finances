const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('databaseManagement', {
    loadDistributionFinances: () => ipcRenderer.invoke('load-distribution-finances'),
    addAndLoadDistributionFinancesType: (distributionFinancesTypeName) => ipcRenderer.invoke('add-and-load-distribution-finances-type', distributionFinancesTypeName),
    editAndLoadDistributionFinancesType: (newTypeName, currentTypeName) => ipcRenderer.invoke('edit-and-load-distribution-finances-type', newTypeName, currentTypeName),

    loadExpensesCategories: () => ipcRenderer.invoke('load-expenses-categories'),
    addAndLoadExpenseCategory: (expenseCategoryName) => ipcRenderer.invoke('add-and-load-expense-category', expenseCategoryName),
    editAndLoadExpenseCategory: (newCategoryName, currentCategoryName) => ipcRenderer.invoke('edit-and-load-expense-category', newCategoryName, currentCategoryName),

});
