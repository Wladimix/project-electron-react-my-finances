import { createStore, createEvent } from 'effector';

const setDistributionFinancesTypeValue = createEvent();
const $distributionFinancesTypeValue = createStore('').on(setDistributionFinancesTypeValue, (state, done) => done);

const setExpenseTypeValue = createEvent();
const $expenseTypeValue = createStore('').on(setExpenseTypeValue, (state, done) => done);

const setNameOperationValue = createEvent();
const $nameOperationValue = createStore('').on(setNameOperationValue, (state, done) => done);

const setSumOperationValue = createEvent();
const $sumOperationValue = createStore('').on(setSumOperationValue, (state, done) => done);

const setFirstOperationCategoryValue = createEvent();
const $firstOperationCategoryValue = createStore('').on(setFirstOperationCategoryValue, (state, done) => done);

const setSecondOperationCategoryValue = createEvent();
const $secondOperationCategoryValue = createStore('').on(setSecondOperationCategoryValue, (state, done) => done);

export default {
    setDistributionFinancesTypeValue,
    $distributionFinancesTypeValue,

    setExpenseTypeValue,
    $expenseTypeValue,

    setNameOperationValue,
    $nameOperationValue,

    setSumOperationValue,
    $sumOperationValue,

    setFirstOperationCategoryValue,
    $firstOperationCategoryValue,

    setSecondOperationCategoryValue,
    $secondOperationCategoryValue
}
