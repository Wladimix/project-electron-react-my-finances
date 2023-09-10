import { createStore, createEvent } from 'effector';

const setSelectedRow = createEvent();
const $selectedRow = createStore('').on(setSelectedRow, (state, done) => done);

const setCellsOverflowIsHidden = createEvent();
const $cellsOverflowIsHidden = createStore(false).on(setCellsOverflowIsHidden, (state, done) => done);

const setTextWithOperationsDataIsHidden = createEvent();
const $textWithOperationsDataIsHidden = createStore(false).on(setTextWithOperationsDataIsHidden, (state, done) => done);

const setInputWithOperationsDataIsNotHidden = createEvent();
const $inputWithOperationsDataIsNotHidden = createStore(false).on(setInputWithOperationsDataIsNotHidden, (state, done) => done);

export default {
    setSelectedRow,
    $selectedRow,

    setCellsOverflowIsHidden,
    $cellsOverflowIsHidden,

    setTextWithOperationsDataIsHidden,
    $textWithOperationsDataIsHidden,

    setInputWithOperationsDataIsNotHidden,
    $inputWithOperationsDataIsNotHidden
}
