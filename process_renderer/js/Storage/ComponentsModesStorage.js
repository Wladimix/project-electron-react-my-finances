import { createStore, createEvent } from 'effector';

const setRowEditingMode = createEvent();
const $rowEditingMode = createStore('').on(setRowEditingMode, (state, done) => done);

export default {
    setRowEditingMode,
    $rowEditingMode
}
