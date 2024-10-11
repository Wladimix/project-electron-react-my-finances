const { createTablesIfNotExist } = require("@/StartApplication/StartService.js");

class StartController {

    async createTables() {
        try {
            await createTablesIfNotExist();
        } catch (err) {
            console.log("Ошибка при создании таблиц:");
            console.log(err.message);
        }

    };

};

module.exports = new StartController();
