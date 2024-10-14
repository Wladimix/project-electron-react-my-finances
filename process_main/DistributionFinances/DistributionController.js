const { addDistributionType, getAllDistributionTypes } = require("@main/DistributionFinances/DistributionService");

class DistributionController {

    async addDistributionType(event, data) {
        try {
            await addDistributionType(data);
            return await getAllDistributionTypes();
        } catch (err) {
            console.log("Ошибка при добавлении типа распределения финансов:");
            console.log(err.message);
        }
    };

};

module.exports = new DistributionController();
