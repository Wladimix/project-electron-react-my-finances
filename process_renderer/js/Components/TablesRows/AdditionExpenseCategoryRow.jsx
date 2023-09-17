import React from "react";
import { useStore } from "effector-react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import ExpensesCategoriesController from "../../Controllers/ExpensesCategoriesController.js";
import EditingInputsValues from "../../SupportFunctions/EditingInputsValues.js";
import InputsValuesStorage from "../../Storages/InputsValuesStorage.js";
import DownloadProcessStorage from "../../Storages/DownloadProcessStorage.js";
import ComponentsAnimationStorage from "../../Storages/ComponentsAnimationStorage.js";

export default function AdditionExpenseCategoryRow() {
    const expenseCategory = useStore(InputsValuesStorage.$expenseCategory);
    const isLoadingExpensesCategories = useStore(DownloadProcessStorage.$isLoadingExpensesCategories);
    const rowEditingMode = useStore(ComponentsAnimationStorage.$rowEditingMode);

    return <tr className='table-row'>
        <td className='table-cell' colSpan={2}>
            <Form.Control
                disabled={ rowEditingMode.editingMode }
                placeholder='Новая категория'
                value={ expenseCategory }
                onChange={ e => EditingInputsValues.changeExpenseCategory(e) }
            />
        </td>
        <td className='table-cell'>
            <Button
                disabled={ isLoadingExpensesCategories || rowEditingMode.editingMode}
                variant='success'
                onClick={ e => ExpensesCategoriesController.addAndLoadExpenseCategory(expenseCategory) }
            >
                Добавить
            </Button>
        </td>
    </tr>;
}
