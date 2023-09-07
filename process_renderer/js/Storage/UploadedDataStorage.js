import { createStore, createEvent } from 'effector';

const setDistributionFinancesTypes = createEvent();
const $distributionFinancesTypes = createStore([]).on(setDistributionFinancesTypes, (state, done) => done);

const setExpensesTypes = createEvent();
const $expensesTypes = createStore([]).on(setExpensesTypes, (state, done) => done);

const setBudgetUnits = createEvent();
const $budgetUnits = createStore([]).on(setBudgetUnits, (state, done) => done);

export default {
    setDistributionFinancesTypes,
    $distributionFinancesTypes,

    setExpensesTypes,
    $expensesTypes,

    setBudgetUnits,
    $budgetUnits
}
