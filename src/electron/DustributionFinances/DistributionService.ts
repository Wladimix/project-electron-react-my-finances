import DistributionModel from "./DustributionModel";

import { TablesNames } from "../constants";

class DistributionService {

    async getAllDistributionTypes() {
        const distributionTypes = await DistributionModel.getAll();
        console.info(`Получены данные из таблицы "${TablesNames.DISTRIBUTION_OF_FINANCES_TABLE_NAME}"`);

        return distributionTypes;
    };
};

export default new DistributionService();
