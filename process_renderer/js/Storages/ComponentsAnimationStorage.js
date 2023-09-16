import { createStore, createEvent } from "effector";

const setRowEditingMode = createEvent();
const $rowEditingMode = createStore({editingMode: false, isDelete: false}).on(setRowEditingMode, (_, newValue) => newValue);

const setSelectedRow = createEvent();
const $selectedRow = createStore('').on(setSelectedRow, (_, newValue) => newValue);

const setCellsOverflowIsHidden = createEvent();
const $cellsOverflowIsHidden = createStore(false).on(setCellsOverflowIsHidden, (_, newValue) => newValue);

const setDefaultCellValue = createEvent();
const $defaultCellValue = createStore(false).on(setDefaultCellValue, (_, newValue) => newValue);

const setAlterCellValue = createEvent();
const $alterCellValue = createStore(false).on(setAlterCellValue, (_, newValue) => newValue);

export default {
    setRowEditingMode,
    $rowEditingMode,

    setSelectedRow,
    $selectedRow,

    setCellsOverflowIsHidden,
    $cellsOverflowIsHidden,

    setDefaultCellValue,
    $defaultCellValue,

    setAlterCellValue,
    $alterCellValue
}
