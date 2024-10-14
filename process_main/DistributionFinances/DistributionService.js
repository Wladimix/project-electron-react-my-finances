const DS = require("@main/Data/DataService");

const { add, getAll } = require("@main/DistributionFinances/DistributionModel");
const { DISTRIBUTION_OF_FINANCES_TABLE_NAME } = require("@main/MainConstants.js");

class DistributionService {

    async getAllDistributionTypes() {
        const DistributionTypes = await getAll();
        return DS.processDataOut(DistributionTypes);
    }

    async addDistributionType(data) {
        DS.processDataIn(data);

        await add(data);
        console.log(`Запись "${data.name}" в таблице "${DISTRIBUTION_OF_FINANCES_TABLE_NAME}" создана`);
    };

};

module.exports = new DistributionService();
