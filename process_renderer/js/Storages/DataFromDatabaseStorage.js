import { createEvent, createStore } from "effector";

const changeDataForDistributionFinancesTable = createEvent();
const $dataForDistributionFinancesTable = createStore([]).on(changeDataForDistributionFinancesTable, (_, newData) => newData);

const changeDataForExpensesCategoriesTable = createEvent();
const $dataForExpensesCategoriesTable = createStore([]).on(changeDataForExpensesCategoriesTable, (_, newData) => newData);

export default {
    changeDataForDistributionFinancesTable,
    $dataForDistributionFinancesTable,

    changeDataForExpensesCategoriesTable,
    $dataForExpensesCategoriesTable
}
