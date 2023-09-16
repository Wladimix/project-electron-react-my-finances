import React from "react";
import { useStore } from "effector-react";

import FormControl from "../TablesCellsContent/FormControl.jsx";
import CustomButton from "../TablesCellsContent/CustomButton.jsx";

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
            <FormControl
                placeholder='Новый тип'
                value={ expenseCategory }
                onChange={ e => EditingInputsValues.changeExpenseCategory(e) }
            />
        </td>
        <td className='table-cell'>
            <CustomButton
                disabled={ isLoadingExpensesCategories || rowEditingMode.editingMode}
                variant='success'
                textButton='Добавить'
                onClick={ e => ExpensesCategoriesController.addAndLoadExpenseCategory(expenseCategory) }
            />
        </td>
    </tr>;
}
