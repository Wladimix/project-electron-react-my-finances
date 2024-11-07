import DistributionService from "./DistributionService";

import { IDistributionController } from "../types";
import { RequestStatuses } from "../constants";

class DistributionController implements IDistributionController {

    async getAllDistributionTypes() {
        try {
            const allDistributionTypes = await DistributionService.getAllDistributionTypes();

            return {
                data: allDistributionTypes,
                status: RequestStatuses.SUCCESS,
                message: "Получены типы распределения финансов"
            }
        } catch (error) {
            return {
                data: null,
                status: RequestStatuses.ERROR,
                message: 'await ErrorService.makeErrorMessage(error, "Ошибка получения типов распределения финансов")'
            };
        };
    };

};

export default new DistributionController();
