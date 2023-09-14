import { createEvent, createStore } from "effector";

const setIsLoadingDistributionFinances = createEvent();
const $isLoadingDistributionFinances = createStore(false).on(setIsLoadingDistributionFinances, (_, newValue) => newValue);

export default {
    setIsLoadingDistributionFinances,
    $isLoadingDistributionFinances
}
