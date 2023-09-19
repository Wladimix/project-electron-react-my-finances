const DistributionFinancesModel = require("../1_Models/DistributionFinancesModel.js");
const DistributionFinancesProcessing = require("../2_ProcessingQueryResults/DistributionFinancesProcessing.js");
const knex = require("../ConnectionDB.js");

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

function editAndLoadDistributionFinancesType(newTypeName, currentTypeName) {
    let editDistributionFinancesTypePromise = DistributionFinancesModel.editDistributionFinancesType(knex, newTypeName, currentTypeName);
    let editDistributionFinancesTypeProcessingPromise = DistributionFinancesProcessing.editDistributionFinancesTypeProcessing(editDistributionFinancesTypePromise);

    let getDistributionFinancesPromise = DistributionFinancesModel.getDistributionFinances(knex, editDistributionFinancesTypeProcessingPromise);
    let getDistributionFinancesProcessingPromise = DistributionFinancesProcessing.getDistributionFinancesProcessing(getDistributionFinancesPromise);

    return getDistributionFinancesProcessingPromise;
}

function deleteAndLoadDistributionFinancesType(distributionFinancesTypeName) {
    let deleteDistributionFinancesTypePromise = DistributionFinancesModel.deleteDistributionFinancesType(knex, distributionFinancesTypeName);
    let deleteDistributionFinancesTypeProcessingPromise = DistributionFinancesProcessing.deleteDistributionFinancesTypeProcessing(deleteDistributionFinancesTypePromise);

    let getDistributionFinancesPromise = DistributionFinancesModel.getDistributionFinances(knex, deleteDistributionFinancesTypeProcessingPromise);
    let getDistributionFinancesProcessingPromise = DistributionFinancesProcessing.getDistributionFinancesProcessing(getDistributionFinancesPromise);

    return getDistributionFinancesProcessingPromise;
}

module.exports = {
    loadDistributionFinances,
    addAndLoadDistributionFinancesType,
    editAndLoadDistributionFinancesType,
    deleteAndLoadDistributionFinancesType
}
