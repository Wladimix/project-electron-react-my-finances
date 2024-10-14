const { add } = require("@main/DistributionFinances/DistributionModel");

class DistributionService {

    async addDistributionType(name, amount) {
        await add(name, amount);
        console.log(`Запись "${name}" создана`);
    };

};

module.exports = new DistributionService();
