import CategoryController from "./SpendingCategory/CategoryController";
import DistributionController from "./DustributionFinances/DistributionController";

import { Controller } from "./types";
import { ipcMain } from "electron";

function ipcHandle<Channel extends keyof ElectronApi, Listener extends Controller[Channel]>(channel: Channel, listener: Listener) {
    ipcMain.handle(channel, listener);
};

export default function router() {

    ipcHandle("getAllDistributionTypes", DistributionController.getAllDistributionTypes);

    ipcHandle("getAllCategories", CategoryController.getAllCategories);

};
