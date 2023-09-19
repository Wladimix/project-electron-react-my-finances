import { createEvent, createStore } from "effector";

const changeAddedDistributionFinancesType = createEvent();
const $addedDistributionFinancesType = createStore('').on(changeAddedDistributionFinancesType, (_, newValue) => newValue);

const changeEditableDistributionFinancesType = createEvent();
const $editableDistributionFinancesType = createStore('').on(changeEditableDistributionFinancesType, (_, newValue) => newValue);

const changeAddedExpenseCategory = createEvent();
const $addedExpenseCategory = createStore('').on(changeAddedExpenseCategory, (_, newValue) => newValue);

const changeEditableExpenseCategory = createEvent();
const $editableExpenseCategory = createStore('').on(changeEditableExpenseCategory, (_, newValue) => newValue);

export default {
    changeAddedDistributionFinancesType,
    $addedDistributionFinancesType,

    changeEditableDistributionFinancesType,
    $editableDistributionFinancesType,

    changeAddedExpenseCategory,
    $addedExpenseCategory,

    changeEditableExpenseCategory,
    $editableExpenseCategory
}
