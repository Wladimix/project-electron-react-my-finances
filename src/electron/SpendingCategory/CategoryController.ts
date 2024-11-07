import CategoryService from "./CategoryService";

import { ICategoryController } from "../types";
import { RequestStatuses } from "../constants";

class CategoryController implements ICategoryController {

    async getAllCategories() {
        try {
            const allCategories = await CategoryService.getAllCategories();

            return {
                data: allCategories,
                status: RequestStatuses.SUCCESS,
                message: "Получены категории расходов"
            }
        } catch (error) {
            return {
                data: null,
                status: RequestStatuses.ERROR,
                message: 'await ErrorService.makeErrorMessage(error, "Ошибка получения категорий расходов")'
            };
        };
    };

};

export default new CategoryController();
