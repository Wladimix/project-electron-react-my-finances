const Constants = require("../../Constants.js");

function createTableProcessing(queryResult) {
    queryResult
        .then(() => {
            console.log(`Таблица ${Constants.DISTRIBUTION_OF_FINANCES_TABLE_NAME} создана.`)
        })
        .catch((error) => {
            console.error(error);
        })
}

module.exports = {
    createTableProcessing
}
