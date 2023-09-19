import React from "react";
import { useStore } from "effector-react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import ExpensesCategoriesController from "../../0_Controllers/ExpensesCategoriesController.js";
import ComponentsAnimationStorage from "../../Storages/ComponentsAnimationStorage.js";
import DownloadProcessStorage from "../../Storages/DownloadProcessStorage.js";
import InputsValuesStorage from "../../Storages/InputsValuesStorage.js";
import EditingInputsValues from "../../SupportFunctions/EditingInputsValues.js";

export default function AdditionExpenseCategoryRow() {
    const addedExpenseCategory = useStore(InputsValuesStorage.$addedExpenseCategory);
    const isLoadingExpensesCategoriesAfterAdding = useStore(DownloadProcessStorage.$isLoadingExpensesCategoriesAfterAdding);
    const isLoadingExpensesCategoriesAfterEditing = useStore(DownloadProcessStorage.$isLoadingExpensesCategoriesAfterEditing);
    const cellsOverflowIsHidden = useStore(ComponentsAnimationStorage.$cellsOverflowIsHidden);
    const rowEditingMode = useStore(ComponentsAnimationStorage.$rowEditingMode);

    return <tr className='table-row'>
        <td className='table-cell' colSpan={2}>
            <Form.Control
                disabled={
                    rowEditingMode.editingMode ||
                    cellsOverflowIsHidden
                }
                placeholder='Новая категория'
                value={ addedExpenseCategory }
                onChange={ e => EditingInputsValues.changeAddedExpenseCategory(e) }
            />
        </td>
        <td className='table-cell'>
            <Button
                disabled={
                    isLoadingExpensesCategoriesAfterAdding ||
                    isLoadingExpensesCategoriesAfterEditing ||
                    rowEditingMode.editingMode ||
                    cellsOverflowIsHidden
                }
                variant='success'
                onClick={ e => ExpensesCategoriesController.addAndLoadExpenseCategory(addedExpenseCategory) }
            >
                Добавить
            </Button>
        </td>
    </tr>;
}
