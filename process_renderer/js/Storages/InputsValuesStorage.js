import { createEvent, createStore } from "effector";

const changeDistributionFinancesType = createEvent();
const $distributionFinancesType = createStore('').on(changeDistributionFinancesType, (_, newValue) => newValue);

const changeExpenseCategory = createEvent();
const $expenseCategory = createStore('').on(changeExpenseCategory, (_, newValue) => newValue);

export default {
    changeDistributionFinancesType,
    $distributionFinancesType,

    changeExpenseCategory,
    $expenseCategory
}
