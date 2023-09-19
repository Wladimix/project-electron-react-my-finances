import React from "react";
import { useStore } from "effector-react";

import AnimatedFormControl from "../TablesCellsContent/AnimatedFormControl.jsx";
import AnimatedActionButtons from "../TablesCellsContent/AnimatedActionButtons.jsx";

import ExpensesCategoriesController from "../../0_Controllers/ExpensesCategoriesController.js";
import ComponentsAnimationStorage from "../../Storages/ComponentsAnimationStorage.js";
import DataFromDatabaseStorage from "../../Storages/DataFromDatabaseStorage.js";
import DownloadProcessStorage from "../../Storages/DownloadProcessStorage.js";
import InputsValuesStorage from "../../Storages/InputsValuesStorage.js";
import Animation from "../../SupportFunctions/Animation.js";
import EditingInputsValues from "../../SupportFunctions/EditingInputsValues.js";

import { EXPENSES_CATEGORIES_EXTRA_ID } from "../../RendererConstants.js";

export default function ExpensesCategoriesRows() {
    const dataForExpensesCategoriesTable = useStore(DataFromDatabaseStorage.$dataForExpensesCategoriesTable);
    const editableExpenseCategory = useStore(InputsValuesStorage.$editableExpenseCategory);
    const isLoadingExpensesCategoriesAfterEditing = useStore(DownloadProcessStorage.$isLoadingExpensesCategoriesAfterEditing);

    const rowEditingMode = useStore(ComponentsAnimationStorage.$rowEditingMode);
    const selectedRow = useStore(ComponentsAnimationStorage.$selectedRow);
    const cellsOverflowIsHidden = useStore(ComponentsAnimationStorage.$cellsOverflowIsHidden);
    const defaultCellValueIsHidden = useStore(ComponentsAnimationStorage.$defaultCellValueIsHidden);
    const alterCellValueIsNotHidden = useStore(ComponentsAnimationStorage.$alterCellValueIsNotHidden);

    return <>{
        dataForExpensesCategoriesTable.map((elem) => {
            let classesNamesForRow = Animation.makeClassesNamesForRow(
                elem.id + EXPENSES_CATEGORIES_EXTRA_ID,
                {
                    rowEditingMode: rowEditingMode,
                    selectedRow: selectedRow,
                    cellsOverflowIsHidden: cellsOverflowIsHidden,
                    defaultCellValueIsHidden: defaultCellValueIsHidden,
                    alterCellValueIsNotHidden: alterCellValueIsNotHidden
                }
            );

            return <tr className='table-row' key={ elem.id }>
                <td className={ classesNamesForRow.cellClassName }>
                    <AnimatedFormControl
                        classesNames={ classesNamesForRow }
                        placeholder='Категория расходов'
                        divValue={ isLoadingExpensesCategoriesAfterEditing ? 'загрузка' : elem.name }
                        formControlValue={ editableExpenseCategory }
                        onChange={ e => EditingInputsValues.changeEditableExpenseCategory(e) }
                    />
                </td>
                <td className={ classesNamesForRow.cellClassName }>
                    сумма
                </td>
                <td className={ classesNamesForRow.cellClassName }>
                    <AnimatedActionButtons
                        classesNames={ classesNamesForRow }
                        index={ elem.id + EXPENSES_CATEGORIES_EXTRA_ID }
                        typeOrCategoryName={ elem.name }
                        changeInputValueStorageFunction={ () => InputsValuesStorage.changeEditableExpenseCategory(elem.name) }
                        editFunction={ () => ExpensesCategoriesController.editAndLoadExpenseCategory(editableExpenseCategory, elem.name) }
                    />
                </td>
            </tr>
        })
    }</>;
}
