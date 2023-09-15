import { createEvent, createStore } from "effector";

const setIsLoadingDistributionFinances = createEvent();
const $isLoadingDistributionFinances = createStore(false).on(setIsLoadingDistributionFinances, (_, newValue) => newValue);

const setIsLoadingExpensesCategories = createEvent();
const $isLoadingExpensesCategories = createStore(false).on(setIsLoadingExpensesCategories, (_, newValue) => newValue);

export default {
    setIsLoadingDistributionFinances,
    $isLoadingDistributionFinances,

    setIsLoadingExpensesCategories,
    $isLoadingExpensesCategories
}
