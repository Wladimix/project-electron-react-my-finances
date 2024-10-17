const { addDistributionType, getAllDistributionTypes } = require("@main/DistributionFinances/DistributionService");
const { REQUEST_STATUS_SUCCESS, REQUEST_STATUS_ERROR } = require("@main/MainConstants.js");

class DistributionController {

    async getAllDistributionTypes() {
        try {
            const allDistributionTypes = await getAllDistributionTypes();

            return {
                data: allDistributionTypes,
                status: REQUEST_STATUS_SUCCESS,
                message: "Получены типы распределения финансов"
            }
        } catch (err) {
            const errorMessage = "Ошибка получения типов распределения финансов";
            console.error(errorMessage + ":");
            console.log(err.message);

            return {
                status: REQUEST_STATUS_ERROR,
                message: errorMessage
            }
        }
    }

    async addDistributionType(event, data) {
        try {
            await addDistributionType(data);

            return {
                status: REQUEST_STATUS_SUCCESS,
                message: "Добавлен тип распределения финансов"
            }
        } catch (err) {
            const errorMessage = "Ошибка добавления типа распределения финансов";
            console.error(errorMessage + ":");
            console.log(err.message);

            return {
                status: REQUEST_STATUS_ERROR,
                message: errorMessage
            }
        }
    };

};

module.exports = new DistributionController();
