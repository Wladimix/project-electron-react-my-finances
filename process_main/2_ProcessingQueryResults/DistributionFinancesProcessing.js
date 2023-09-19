const Constants = require("../Constants.js");

function createTableProcessing(queryResult) {
    queryResult
        .then(() => {
            console.log(`Таблица ${Constants.DISTRIBUTION_OF_FINANCES_TABLE_NAME} создана.`)
        })
        .catch((error) => {
            console.error(error);
        })
}

function getDistributionFinancesProcessing(queryResult) {
    return queryResult
        .then((result) => {
            console.log(`Данные из таблицы "${Constants.DISTRIBUTION_OF_FINANCES_TABLE_NAME}" загружены`);
            return result;
        }).catch((error) => {
            console.error(error);
        })
}

function addDistributionFinancesTypeProcessing(queryResult) {
    return queryResult
        .then((result) => {
            console.log(`Данные в таблицу ${Constants.DISTRIBUTION_OF_FINANCES_TABLE_NAME} добавлены.`);
            return result;
        })
        .catch((error) => {
            console.error(error);
        })
}

function editDistributionFinancesTypeProcessing(queryResult) {
    return queryResult
        .then((result) => {
            console.log(`Данные в таблице ${Constants.DISTRIBUTION_OF_FINANCES_TABLE_NAME} изменены.`);
            return result;
        })
        .catch((error) => {
            console.error(error);
        })
}

module.exports = {
    createTableProcessing,
    getDistributionFinancesProcessing,
    addDistributionFinancesTypeProcessing,
    editDistributionFinancesTypeProcessing
}
