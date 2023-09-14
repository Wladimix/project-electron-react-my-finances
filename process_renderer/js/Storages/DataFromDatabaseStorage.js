import { createEvent, createStore } from "effector";

const changeDataForDistributionFinancesTable = createEvent();
const $dataForDistributionFinancesTable = createStore([]).on(changeDataForDistributionFinancesTable, (_, newData) => newData);

export default {
    changeDataForDistributionFinancesTable,
    $dataForDistributionFinancesTable
}
