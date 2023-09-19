const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const Constants = require("./process_main/MainConstants.js");
const CreateTablesController = require("./process_main/0_Controllers/CreateTablesController.js");
const DistributionFinancesController = require("./process_main/0_Controllers/DistributionFinancesController.js");
const ExpensesCategoriesController = require("./process_main/0_Controllers/ExpensesCategoriesController.js");

function createWindow() {
    const win = new BrowserWindow({
        width: 1400,
        height: 500,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            additionalArguments: Constants
        }
    });

    win.setTitle('Мои финансы');
    win.loadFile('index.html');
}

// код для разработки
// закомментировать перед упаковкой приложения
require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

app.whenReady().then(() => {
    CreateTablesController.createTables();

    ipcMain.handle('load-distribution-finances', (e) => { return DistributionFinancesController.loadDistributionFinances() });
    ipcMain.handle('add-and-load-distribution-finances-type', (e, distributionFinancesTypeName) => { return DistributionFinancesController.addAndLoadDistributionFinancesType(distributionFinancesTypeName) });
    ipcMain.handle('edit-and-load-distribution-finances-type', (e, newTypeName, currentTypeName) => { return DistributionFinancesController.editAndLoadDistributionFinancesType(newTypeName, currentTypeName) });
    ipcMain.handle('delete-and-load-distribution-finances-type', (e, distributionFinancesTypeName) => { return DistributionFinancesController.deleteAndLoadDistributionFinancesType(distributionFinancesTypeName) });

    ipcMain.handle('load-expenses-categories', (e) => { return ExpensesCategoriesController.loadExpensesCategories() });
    ipcMain.handle('add-and-load-expense-category', (e, expenseCategoryName) => { return ExpensesCategoriesController.addAndLoadExpenseCategory(expenseCategoryName) });
    ipcMain.handle('edit-and-load-expense-category', (e, newCategoryName, currentCategoryName) => { return ExpensesCategoriesController.editAndLoadExpenseCategory(newCategoryName, currentCategoryName) });
    ipcMain.handle('delete-and-load-expense-category', (e, expenseCategoryName) => { return ExpensesCategoriesController.deleteAndLoadExpenseCategory(expenseCategoryName) });

    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});
