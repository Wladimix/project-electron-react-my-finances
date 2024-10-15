const { addDistributionType, getAllDistributionTypes } = require("@main/DistributionFinances/DistributionService");

class DistributionController {

    async getAllDistributionTypes() {
        try {
            return await getAllDistributionTypes();
        } catch (err) {
            console.log("Ошибка при получении типов распределения финансов:");
            console.log(err.message);
        }
    }

    async addDistributionType(event, data) {
        try {
            await addDistributionType(data);
        } catch (err) {
            console.log("Ошибка при добавлении типа распределения финансов:");
            console.log(err.message);
        }
    };

};

module.exports = new DistributionController();
