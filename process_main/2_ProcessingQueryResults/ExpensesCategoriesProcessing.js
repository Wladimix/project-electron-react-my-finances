const Constants = require("../Constants.js");

function createTableProcessing(queryResult) {
    queryResult
        .then(() => {
            console.log(`Таблица ${Constants.EXPENSES_CATEGORIES_TABLE_NAME} создана.`)
        })
        .catch((error) => {
            console.error(error);
        })
}

function getExpensesCategoriesProcessing(queryResult) {
    return queryResult
        .then((result) => {
            console.log(`Данные из таблицы "${Constants.EXPENSES_CATEGORIES_TABLE_NAME}" загружены`);
            return result;
        }).catch((error) => {
            console.error(error);
        })
}

function addExpenseCategoryProcessing(queryResult) {
    return queryResult
        .then((result) => {
            console.log(`Данные в таблицу ${Constants.EXPENSES_CATEGORIES_TABLE_NAME} добавлены.`);
            return result;
        })
        .catch((error) => {
            console.error(error);
        })
}

function editExpenseCategoryProcessing(queryResult) {
    return queryResult
        .then((result) => {
            console.log(`Данные в таблице ${Constants.EXPENSES_CATEGORIES_TABLE_NAME} изменены.`);
            return result;
        })
        .catch((error) => {
            console.error(error);
        })
}

module.exports = {
    createTableProcessing,
    getExpensesCategoriesProcessing,
    addExpenseCategoryProcessing,
    editExpenseCategoryProcessing
}
