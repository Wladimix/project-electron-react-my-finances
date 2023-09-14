const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('constants', {
    DATABASE_PATH: '/home/vladimir/my_finances_db.sqlite3',
    DISTRIBUTION_OF_FINANCES_TABLE_NAME: 'distribution_of_finances',
});

contextBridge.exposeInMainWorld('databaseManagement', {
    //
});
