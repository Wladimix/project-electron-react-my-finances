const { app, BrowserWindow } = require('electron');
const path = require('path');
const Launchingpplication = require('./process_main/Controllers/LaunchingApplication');

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
    Launchingpplication.createTables();
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});
