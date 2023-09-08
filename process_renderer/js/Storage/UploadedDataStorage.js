import { createStore, createEvent } from 'effector';

const setDistributionFinancesTypes = createEvent();
const $distributionFinancesTypes = createStore([]).on(setDistributionFinancesTypes, (state, done) => done);

const setExpensesCategories = createEvent();
const $expensesCategories = createStore([]).on(setExpensesCategories, (state, done) => done);

const setBudgetUnits = createEvent();
const $budgetUnits = createStore([]).on(setBudgetUnits, (state, done) => done);

export default {
    setDistributionFinancesTypes,
    $distributionFinancesTypes,

    setExpensesCategories,
    $expensesCategories,

    setBudgetUnits,
    $budgetUnits
}
