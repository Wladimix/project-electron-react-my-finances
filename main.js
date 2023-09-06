const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const knex = require('./process_main/Database/ConnectionDB');
const LaunchingAplication = require('./process_main/Controllers/LaunchingApplication');
const BudgetCategories = require('./process_main/Database/Models/BudgetCategories');

function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 500,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.setTitle('Мои финансы');
    win.loadFile('index.html');
}

require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

app.whenReady().then(() => {
    LaunchingAplication.createTables();

    ipcMain.handle('get-expenses-types', () => { return BudgetCategories.getExpensesTypes(knex) });
    ipcMain.handle('add-expense-type', () => BudgetCategories.addExpenseType(knex));

    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});
