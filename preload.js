const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
    notificationApi: {
        sendNotification(message) {
            ipcRenderer.send("test-notify", message);
        }
    }
});
