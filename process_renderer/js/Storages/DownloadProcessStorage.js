import { createEvent, createStore } from "effector";

const setIsLoadingDistributionFinancesAfterAdding = createEvent();
const $isLoadingDistributionFinancesAfterAdding = createStore(false).on(setIsLoadingDistributionFinancesAfterAdding, (_, newValue) => newValue);

const setIsLoadingDistributionFinancesAfterEditing = createEvent();
const $isLoadingDistributionFinancesAfterEditing = createStore(false).on(setIsLoadingDistributionFinancesAfterEditing, (_, newValue) => newValue);

const setIsLoadingExpensesCategoriesAfterAdding = createEvent();
const $isLoadingExpensesCategoriesAfterAdding = createStore(false).on(setIsLoadingExpensesCategoriesAfterAdding, (_, newValue) => newValue);

const setIsLoadingExpensesCategoriesAfterEditing = createEvent();
const $isLoadingExpensesCategoriesAfterEditing = createStore(false).on(setIsLoadingExpensesCategoriesAfterEditing, (_, newValue) => newValue);

export default {
    setIsLoadingDistributionFinancesAfterAdding,
    $isLoadingDistributionFinancesAfterAdding,

    setIsLoadingDistributionFinancesAfterEditing,
    $isLoadingDistributionFinancesAfterEditing,

    setIsLoadingExpensesCategoriesAfterAdding,
    $isLoadingExpensesCategoriesAfterAdding,

    setIsLoadingExpensesCategoriesAfterEditing,
    $isLoadingExpensesCategoriesAfterEditing
}
