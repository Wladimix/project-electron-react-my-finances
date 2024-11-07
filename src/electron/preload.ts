import { ipcRenderer, contextBridge } from "electron";

const api: ElectronApi = {

    getAllDistributionTypes: () => ipcRenderer.invoke("getAllDistributionTypes"),

    getAllCategories: () => ipcRenderer.invoke("getAllCategories")

}

contextBridge.exposeInMainWorld("electron", api);
