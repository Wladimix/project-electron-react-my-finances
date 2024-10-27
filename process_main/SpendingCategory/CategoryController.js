const ErrorService = require("@main/Error/ErrorService.js");

const { getAllCategories, addCategory, editCategory, deleteCategory } = require("@main/SpendingCategory/CategoryService.js");
const { REQUEST_STATUS_SUCCESS, REQUEST_STATUS_ERROR } = require("@main/MainConstants.js");

class CategoryController {

    async getAllCategories() {
        try {
            const allCategories = await getAllCategories();

            return {
                data: allCategories,
                status: REQUEST_STATUS_SUCCESS,
                message: "Получены категории расходов"
            }
        } catch (error) {
            return {
                status: REQUEST_STATUS_ERROR,
                message: await ErrorService.makeErrorMessage(error, "Ошибка получения категорий расходов")
            };
        };
    };

    async addCategory(event, name) {
        try {
            await addCategory(name);

            return {
                status: REQUEST_STATUS_SUCCESS,
                message: "Добавлена категория расходов"
            };
        } catch (error) {
            return {
                status: REQUEST_STATUS_ERROR,
                message: await ErrorService.makeErrorMessage(error, "Ошибка добавления категории расходов")
            };
        };
    };

    async editCategory(event, data) {
        try {
            await editCategory(data);

            return {
                status: REQUEST_STATUS_SUCCESS,
                message: "Категория расходов отредактирована"
            };
        } catch (error) {
            return {
                status: REQUEST_STATUS_ERROR,
                message: await ErrorService.makeErrorMessage(error, "Ошибка редактирования категории расходов")
            };
        };
    };

    async deleteCategory(event, data) {
        try {
            await deleteCategory(data);

            return {
                status: REQUEST_STATUS_SUCCESS,
                message: "Категория расходов удалена"
            };
        } catch (error) {
            return {
                status: REQUEST_STATUS_ERROR,
                message: await ErrorService.makeErrorMessage(error, "Ошибка удаления категории расходов")
            };
        };
    };

};

module.exports = new CategoryController();
