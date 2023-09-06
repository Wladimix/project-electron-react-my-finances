import { createStore, createEffect } from 'effector';

const setBudgetUnits = createEffect();
const $budgetUnits = createStore([]).on(setBudgetUnits, (state, done) => done);

export default {
    setBudgetUnits,
    $budgetUnits
}
