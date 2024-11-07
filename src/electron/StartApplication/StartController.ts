import StartService from "./StartService";

class StartController {

    async createTables() {
        try {
            await StartService.createTablesIfNotExist();
        } catch (error) {
            console.log("Ошибка при создании таблиц:");
            console.log((error as Error).message);
        }

    };

};

export default new StartController();
