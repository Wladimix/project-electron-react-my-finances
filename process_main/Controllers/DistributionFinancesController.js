const knex = require("../Database/ConnectionDB.js");
const DistributionFinancesModel = require("../Database/Models/DistributionFinancesModel.js");
const DistributionFinancesProcessing = require("../Database/ProcessingQueryResults/DistributionFinancesProcessing.js");

function loadDistributionFinances() {
    let getDistributionFinancesPromise = DistributionFinancesModel.getDistributionFinances(knex);
    let getDistributionFinancesProcessingPromise = DistributionFinancesProcessing.getDistributionFinancesProcessing(getDistributionFinancesPromise);
    
    return getDistributionFinancesProcessingPromise;
}

function addAndLoadDistributionFinancesType(distributionFinancesTypeName) {
    let addDistributionFinancesTypePromise = DistributionFinancesModel.addDistributionFinancesType(knex, distributionFinancesTypeName);
    let addDistributionFinancesTypeProcessingPromise = DistributionFinancesProcessing.addDistributionFinancesTypeProcessing(addDistributionFinancesTypePromise);
    
    let getDistributionFinancesPromise = DistributionFinancesModel.getDistributionFinances(knex, addDistributionFinancesTypeProcessingPromise);
    let getDistributionFinancesProcessingPromise = DistributionFinancesProcessing.getDistributionFinancesProcessing(getDistributionFinancesPromise);
    
    return getDistributionFinancesProcessingPromise;
}

module.exports = {
    loadDistributionFinances,
    addAndLoadDistributionFinancesType
}
