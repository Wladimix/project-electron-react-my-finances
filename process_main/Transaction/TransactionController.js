const ErrorService = require("@main/Error/ErrorService.js");

const TransactionService = require("@main/Transaction/TransactionService.js");
const { REQUEST_STATUS_SUCCESS, REQUEST_STATUS_ERROR } = require("@main/MainConstants.js");

class TransactionController {

    async getAllTransactions() {
        try {
            const allTransactions = await TransactionService.getAllTransactions();

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

    async addTransaction(event, data) {
        try {
            await TransactionService.addTransaction(data);

            return {
                status: REQUEST_STATUS_SUCCESS,
                message: "Добавлена финансовая транзакция"
            };
        } catch (error) {
            return {
                status: REQUEST_STATUS_ERROR,
                message: await ErrorService.makeErrorMessage(error, "Ошибка добавления финансовой транзакции")
            };
        };
    };

    async editTransaction(event, data) {
        try {
            await TransactionService.editTransaction(data);

            return {
                status: REQUEST_STATUS_SUCCESS,
                message: "Финансовая транзакция отредактирована"
            };
        } catch (error) {
            return {
                status: REQUEST_STATUS_ERROR,
                message: await ErrorService.makeErrorMessage(error, "Ошибка редактирования финансовой транзакции")
            };
        };
    };

};

module.exports = new TransactionController();
