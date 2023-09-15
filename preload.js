const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('constants', {
    DATABASE_PATH: '/home/vladimir/my_finances_db.sqlite3',
    DISTRIBUTION_OF_FINANCES_TABLE_NAME: 'distribution_of_finances',
});

contextBridge.exposeInMainWorld('databaseManagement', {
    loadDistributionFinances: () => ipcRenderer.invoke('load-distribution-finances'),
    addAndLoadDistributionFinancesType: (distributionFinancesTypeName) => ipcRenderer.invoke('add-and-load-distribution-finances-type', distributionFinancesTypeName),

    loadExpensesCategories: () => ipcRenderer.invoke('load-expenses-categories'),
    addAndLoadExpenseCategory: (expenseCategoryName) => ipcRenderer.invoke('add-and-load-expense-category', expenseCategoryName),
});
