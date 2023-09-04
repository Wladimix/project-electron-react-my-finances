const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('tests', {
    test: () => console.log('test')
});
