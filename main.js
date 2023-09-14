const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const CreateTablesController = require("./process_main/Controllers/CreateTablesController.js");
const DistributionFinancesController = require("./process_main/Controllers/DistributionFinancesController.js");

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
    CreateTablesController.createTables();
    ipcMain.handle('load-distribution-finances', (e) => { return DistributionFinancesController.loadDistributionFinances() });
    ipcMain.handle('add-and-load-distribution-finances-type', (e, distributionFinancesTypeName) => { return DistributionFinancesController.addAndLoadDistributionFinancesType(distributionFinancesTypeName) });

    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});
