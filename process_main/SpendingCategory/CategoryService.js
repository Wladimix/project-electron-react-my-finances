const DataService = require("@main/Data/DataService.js");

const { getAll, add, editById, deleteById } = require("@main/SpendingCategory/CategoryModel.js");
const { SPENDING_CATEGORIES_TABLE_NAME } = require("@main/MainConstants.js");

class CategoryService {

    async getAllCategories() {
        const categories = await getAll();
        console.info(`Получены данные из таблицы "${SPENDING_CATEGORIES_TABLE_NAME}"`);

        return DataService.processDataOut(categories);
    };

    async addCategory(name) {
        const data = { name };
        DataService.processDataIn(data);

        await add(data);
        console.info(`Запись "${data.name}" в таблице "${SPENDING_CATEGORIES_TABLE_NAME}" создана`);
    };

    async editCategory(data) {
        DataService.processDataIn(data);

        await editById(data);
        console.info(`Запись #${data.id} в таблице "${SPENDING_CATEGORIES_TABLE_NAME}" отредактирована`);
    };

    async deleteCategory(id) {
        await deleteById(id);
        console.info(`Запись #${id} удалена из таблицы "${SPENDING_CATEGORIES_TABLE_NAME}"`);
    };

};

module.exports = new CategoryService();
