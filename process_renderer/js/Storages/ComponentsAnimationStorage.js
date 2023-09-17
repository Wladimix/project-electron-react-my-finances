import { createStore, createEvent } from "effector";

const setRowEditingMode = createEvent();
const $rowEditingMode = createStore({editingMode: false, isDelete: false}).on(setRowEditingMode, (_, newValue) => newValue);

const setSelectedRow = createEvent();
const $selectedRow = createStore('').on(setSelectedRow, (_, newValue) => newValue);

const setCellsOverflowIsHidden = createEvent();
const $cellsOverflowIsHidden = createStore(false).on(setCellsOverflowIsHidden, (_, newValue) => newValue);

const setDefaultCellValueIsHidden = createEvent();
const $defaultCellValueIsHidden = createStore(false).on(setDefaultCellValueIsHidden, (_, newValue) => newValue);

const setAlterCellValueIsNotHidden = createEvent();
const $alterCellValueIsNotHidden = createStore(false).on(setAlterCellValueIsNotHidden, (_, newValue) => newValue);

export default {
    setRowEditingMode,
    $rowEditingMode,

    setSelectedRow,
    $selectedRow,

    setCellsOverflowIsHidden,
    $cellsOverflowIsHidden,

    setDefaultCellValueIsHidden,
    $defaultCellValueIsHidden,

    setAlterCellValueIsNotHidden,
    $alterCellValueIsNotHidden
}
