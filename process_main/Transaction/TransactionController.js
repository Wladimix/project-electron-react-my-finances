const ErrorService = require("@main/Error/ErrorService.js");

const { getAllTransactions } = require("@main/Transaction/TransactionService.js");
const { REQUEST_STATUS_SUCCESS, REQUEST_STATUS_ERROR } = require("@main/MainConstants.js");

class TransactionController {

    async getAllTransactions() {
        try {
            const allTransactions = await getAllTransactions();

            return {
                data: allTransactions,
                status: REQUEST_STATUS_SUCCESS,
                message: "Получен список транзакций"
            }
        } catch (error) {
            return {
                status: REQUEST_STATUS_ERROR,
                message: await ErrorService.makeErrorMessage(error, "Ошибка получения списка транзакций")
            };
        };
    };

};

module.exports = new TransactionController();
