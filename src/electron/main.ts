import path from "path";
import StartApplication from "./StartApplication";

import { app, BrowserWindow } from "electron";

const isDev = !app.isPackaged;

function createWindow() {
    let win = new BrowserWindow({
        width: 1350,
        height: 800,
        backgroundColor: "white",
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    });

    win.setTitle("Мои финансы");

    if (isDev) {
        win.loadFile("index.html")
    } else {
        win.loadFile(path.join(app.getAppPath(), "/build/index.html"));
    };
};

app.whenReady().then(async () => {
    console.log("Запуск приложения");

    await StartApplication.createTablesIfNotExist();
    StartApplication.createRouter();
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
