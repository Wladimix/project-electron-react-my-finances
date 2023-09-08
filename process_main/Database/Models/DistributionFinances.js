const Constants = require('../../Constants');

function createTable(knex) {
    knex.schema.createTable(Constants.DISTRIBUTION_OF_FINANCES_TABLE_NAME, function (table) {
        table.increments('id');
        table.string('name');
    }).then(function () {
        console.log(`Таблица "${Constants.DISTRIBUTION_OF_FINANCES_TABLE_NAME}" создана`);
    }).catch(function (error) {
        console.error(error);
    });
}

function getDistributionFinancesTypes(knex) {
    return knex
        .select()
        .from(Constants.DISTRIBUTION_OF_FINANCES_TABLE_NAME)
        .then((result) => {
            console.log(`Данные из таблицы "${Constants.DISTRIBUTION_OF_FINANCES_TABLE_NAME}" загружены`);
            return result;
        }).catch((error) => {
            console.error(error);
        });
}

function addDistributionFinancesType(knex, distributionFinancesTypeName) {
    knex(Constants.DISTRIBUTION_OF_FINANCES_TABLE_NAME).insert({
        name: distributionFinancesTypeName,
    }).then(() => {
        console.log(`Запись в таблицу "${Constants.DISTRIBUTION_OF_FINANCES_TABLE_NAME}" добавлена`);
    }).catch((error) => {
        console.error(error);
    });
}

module.exports = {
    createTable,

    getDistributionFinancesTypes,
    addDistributionFinancesType
}
