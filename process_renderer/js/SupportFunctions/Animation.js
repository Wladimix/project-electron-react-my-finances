import ComponentsAnimationStorage from "../Storages/ComponentsAnimationStorage.js";

import { ANIMATION_TIME } from "../RendererConstants.js";

function changeRowEditingMode(selectedRowId, rowEditingMode, isDelete) {
    ComponentsAnimationStorage.setSelectedRow(selectedRowId);

    if (isDelete) {
        ComponentsAnimationStorage.setRowEditingMode({ editingMode: !rowEditingMode, isDelete: true });
    } else {
        ComponentsAnimationStorage.setRowEditingMode({ editingMode: !rowEditingMode, isDelete: false });
    }

    if (!rowEditingMode) {
        ComponentsAnimationStorage.setCellsOverflowIsHidden(true);
        ComponentsAnimationStorage.setAlterCellValueIsNotHidden(true);

        setTimeout(() => {
            ComponentsAnimationStorage.setDefaultCellValueIsHidden(true);
            ComponentsAnimationStorage.setCellsOverflowIsHidden(false);
        }, ANIMATION_TIME);

    } if (rowEditingMode) {
        ComponentsAnimationStorage.setCellsOverflowIsHidden(true);
        ComponentsAnimationStorage.setDefaultCellValueIsHidden(false);

        setTimeout(() => {
            ComponentsAnimationStorage.setCellsOverflowIsHidden(false);
            ComponentsAnimationStorage.setAlterCellValueIsNotHidden(false);
        }, ANIMATION_TIME);
    }
}

function makeClassesNamesForRow(index, { ...Animation }) {
    let editingMode = '';
    let tableWarning = '';
    if (Animation.rowEditingMode.editingMode) {
        editingMode = 'editing-mode';
        tableWarning = Animation.rowEditingMode.isDelete ? 'table-danger' : 'table-warning';
    }
    else editingMode, tableWarning = '';

    let cellOverflowHidden = '';
    if (Animation.cellsOverflowIsHidden) cellOverflowHidden = 'overflow-hidden'
    else cellOverflowHidden = '';

    let defaultHidden = '';
    if (Animation.defaultCellValueIsHidden) defaultHidden = 'hidden'
    else defaultHidden = '';

    let animationHidden = '';
    if (Animation.alterCellValueIsNotHidden) animationHidden = 'not-hidden'
    else animationHidden = '';

    let cellClassName;
    let defaultClassName = '';
    let animationClassName = '';

    if (index === Animation.selectedRow) {
        cellClassName = `animation-table-cell ${cellOverflowHidden} ${tableWarning}`;
        defaultClassName = `default-cell-value d-flex justify-content-around ${editingMode} ${defaultHidden}`;
        animationClassName = `animation-cell-value d-flex justify-content-around ${editingMode} ${animationHidden}`;
    } else {
        cellClassName = 'animation-table-cell';
        defaultClassName = 'default-cell-value d-flex justify-content-around';
        animationClassName = 'animation-cell-value d-flex justify-content-around';
    }

    return {
        cellClassName: cellClassName,
        defaultClassName: defaultClassName,
        animationClassName: animationClassName
    };
}

export default {
    changeRowEditingMode,
    makeClassesNamesForRow
}
