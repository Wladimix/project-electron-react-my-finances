const { addDistributionType } = require("@main/DistributionFinances/DistributionService");

class DistributionController {

    async addDistributionType(event, name, amount) {
        try {
            await addDistributionType(name, amount);
            return 1;
        } catch (err) {
            console.log("Ошибка при добавлении типа распределения финансов:");
            console.log(err.message);
        }
    };

};

module.exports = new DistributionController();
