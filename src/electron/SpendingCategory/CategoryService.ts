import CategoryModel from "./CategoryModel";

import { TablesNames } from "../constants";

class DistributionService {

    async getAllCategories() {
        const categories = await CategoryModel.getAll();
        console.info(`Получены данные из таблицы "${TablesNames.SPENDING_CATEGORIES_TABLE_NAME}"`);

        return categories;
    };
};

export default new DistributionService();
