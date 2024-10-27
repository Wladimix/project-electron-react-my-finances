const DataService = require("@main/Data/DataService.js");

const { getAll, add, editById, deleteById } = require("@main/DistributionFinances/DistributionModel.js");
const { DISTRIBUTION_OF_FINANCES_TABLE_NAME } = require("@main/MainConstants.js");

class DistributionService {

    async getAllDistributionTypes() {
        const distributionTypes = await getAll();
        console.info(`Получены данные из таблицы "${DISTRIBUTION_OF_FINANCES_TABLE_NAME}"`);

        return DataService.processDataOut(distributionTypes);
    };

    async addDistributionType(data) {
        DataService.processDataIn(data);

        await add(data);
        console.info(`Запись "${data.name}" в таблице "${DISTRIBUTION_OF_FINANCES_TABLE_NAME}" создана`);
    };

    async editDistributionType(data) {
        DataService.processDataIn(data);

        await editById(data);
        console.info(`Запись #${data.id} в таблице "${DISTRIBUTION_OF_FINANCES_TABLE_NAME}" отредактирована`);
    };

    async deleteDistributionType(data) {
        DataService.processDataIn(data);

        if (data.amount !== 0) {
            throw new Error("Удаление невозможно, сумма должна равняться 0");
        };

        const currentDate = new Date().getFullYear() + "."
            + (new Date().getMonth() + 1) + "."
            + new Date().getDate() + " "
            + new Date().getHours() + ":"
            + new Date().getMinutes() + ":"
            + new Date().getMilliseconds();

        const id = data.id;
        const newName = data.name + `(удалено ${currentDate})`;

        await editById({ id, name: newName, amount: 0 });
        await deleteById(id);
        console.info(`Запись #${id} в таблице "${DISTRIBUTION_OF_FINANCES_TABLE_NAME}" отмечена, как удалённая`);
    };

};

module.exports = new DistributionService();
