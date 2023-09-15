const Constants = require('../../Constants');

function createTable(knex) {
    return knex.schema.createTable(Constants.DISTRIBUTION_OF_FINANCES_TABLE_NAME, function (table) {
        table.increments('id');
        table.string('name', [50]).notNullable();

        table.unique(['name']);
    });
}

function getDistributionFinances(knex, queryResult = null) {
    if (queryResult !== null) {
        return queryResult.then(() => {
            return knex
                .select()
                .from(Constants.DISTRIBUTION_OF_FINANCES_TABLE_NAME)
                .orderBy('name');
        })
    } else {
        return knex
            .select()
            .from(Constants.DISTRIBUTION_OF_FINANCES_TABLE_NAME)
            .orderBy('name');
    }
}

function addDistributionFinancesType(knex, distributionFinancesTypeName) {
    return knex(Constants.DISTRIBUTION_OF_FINANCES_TABLE_NAME)
        .insert({
            name: distributionFinancesTypeName
        });
}

module.exports = {
    createTable,
    getDistributionFinances,
    addDistributionFinancesType
}
