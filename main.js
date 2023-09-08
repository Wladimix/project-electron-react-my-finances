const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const knex = require('./process_main/Database/ConnectionDB');
const LaunchingAplication = require('./process_main/Functions/LaunchingApplication');
const DistributionFinances = require('./process_main/Database/Models/DistributionFinances');
const ExpensesCategories = require('./process_main/Database/Models/ExpensesCategories');
const BudgetUnits = require('./process_main/Database/Models/BudgetUnits');
const BudgetOperations = require('./process_main/Database/Models/BudgetOperations');
const WorkingWithDatabase = require('./process_main/Functions/WorkingWithDatabase');

function createWindow() {
    const win = new BrowserWindow({
        width: 1400,
        height: 500,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
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
    LaunchingAplication.createTables();

    ipcMain.handle('get-distribution-finances-types', () => { return DistributionFinances.getDistributionFinancesTypes(knex) });
    ipcMain.handle('add-distribution-finances-type', (event, distributionFinancesTypeName) => { DistributionFinances.addDistributionFinancesType(knex, distributionFinancesTypeName) });

    ipcMain.handle('get-expenses-categories', () => { return ExpensesCategories.getExpensesCategories(knex) });
    ipcMain.handle('add-expense-categories', (event, expenceCategoryName) => { ExpensesCategories.addExpenseCategory(knex, expenceCategoryName) });

    ipcMain.handle('get-budget-units', () => { return BudgetUnits.getUnits(knex) });

    ipcMain.handle('get-operations', () => { return BudgetOperations.getOperations(knex)});
    ipcMain.handle('add-operation-and-unit', (event, newUnitName, newOperationSum, firstOperationCategoryId, secondOperationCategoryId) => { return WorkingWithDatabase.addOperationAndUnit(knex, newUnitName, newOperationSum, firstOperationCategoryId, secondOperationCategoryId) });

    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});
