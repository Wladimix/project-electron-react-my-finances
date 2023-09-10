import { createStore, createEvent } from 'effector';

const setSelectedRow = createEvent();
const $selectedRow = createStore('').on(setSelectedRow, (state, done) => done);

const setCellsOverflowIsHidden = createEvent();
const $cellsOverflowIsHidden = createStore('').on(setCellsOverflowIsHidden, (state, done) => done);

const setDivisionsWithOperationsDataIsHidden = createEvent();
const $divisionsWithOperationsDataIsHidden = createStore('').on(setDivisionsWithOperationsDataIsHidden, (state, done) => done);

export default {
    setSelectedRow,
    $selectedRow,

    setCellsOverflowIsHidden,
    $cellsOverflowIsHidden,

    setDivisionsWithOperationsDataIsHidden,
    $divisionsWithOperationsDataIsHidden
}
