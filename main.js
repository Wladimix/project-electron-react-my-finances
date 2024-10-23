require("module-alias/register");
const path = require("path");
const useRouter = require("./router.js");

const { app, BrowserWindow } = require("electron");
const { createTables } = require("@main/StartApplication/StartController.js");

const isDev = !app.isPackaged;

function createWindow() {
    const win = new BrowserWindow({
        width: 1350,
        height: 800,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            preload: path.join(__dirname, "preload.js")
        }
    });

    win.loadFile("index.html");
};

if (isDev) {
    require("electron-reload")(__dirname, {
        electron: path.join(__dirname, "node_modules", ".bin", "electron")
    });
}

app.whenReady().then(async () => {
    console.log("Запуск приложения");

    await createTables();
    useRouter();
    createWindow();
});
