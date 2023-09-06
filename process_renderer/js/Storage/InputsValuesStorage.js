import { createStore, createEffect } from "effector";

const setNameOperationValue = createEffect();
const $nameOperationValue = createStore('').on(setNameOperationValue, (state, done) => done);

export default {
    setNameOperationValue,
    $nameOperationValue
}
