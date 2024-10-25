const CategoryController = require("@main/SpendingCategory/CategoryController.js");
const DistributionController = require("@main/DistributionFinances/DistributionController.js");
const NoteController = require("@main/Note/NoteController.js");
const TransactionController = require("@main/Transaction/TransactionController.js");

const { ipcMain } = require("electron");

function useRouter() {

    ipcMain.handle("get-all-distribution-types", DistributionController.getAllDistributionTypes);
    ipcMain.handle("add-distribution-type", DistributionController.addDistributionType);
    ipcMain.handle("edit-distribution-type", DistributionController.editDistributionType);
    ipcMain.handle("delete-distribution-type", DistributionController.deleteDistributionType);

    ipcMain.handle("get-all-categories", CategoryController.getAllCategories);
    ipcMain.handle("add-category", CategoryController.addCategory);
    ipcMain.handle("edit-category", CategoryController.editCategory);
    ipcMain.handle("delete-category", CategoryController.deleteCategory);

    ipcMain.handle("get-all-transactions", TransactionController.getAllTransactions);
    ipcMain.handle("add-transaction", TransactionController.addTransaction);
    ipcMain.handle("edit-transaction", TransactionController.editTransaction);

    ipcMain.handle("get-all-notes", NoteController.getAllNotes);

}

module.exports = useRouter;
