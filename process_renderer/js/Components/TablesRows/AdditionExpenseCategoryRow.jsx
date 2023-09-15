import React from "react";

import { useStore } from "effector-react";

import FormControl from "../TablesCellsContent/FormControl.jsx";
import Button from "../TablesCellsContent/Button.jsx";

import ExpensesCategoriesController from "../../Controllers/ExpensesCategoriesController.js";
import EditingInputsValues from "../../SupportFunctions/EditingInputsValues.js";
import InputsValuesStorage from "../../Storages/InputsValuesStorage.js";
import DownloadProcessStorage from "../../Storages/DownloadProcessStorage.js";

export default function AdditionExpenseCategoryRow() {
    const expenseCategory = useStore(InputsValuesStorage.$expenseCategory);
    const isLoadingExpensesCategories = useStore(DownloadProcessStorage.$isLoadingExpensesCategories);

    return <tr className='table-row'>
        <td className='table-cell'>
            <FormControl
                placeholder='Новый тип'
                value={ expenseCategory }
                onChange={ e => EditingInputsValues.changeExpenseCategory(e) }
            />
        </td>
        <td className='table-cell'>
            <Button
                disabled={ isLoadingExpensesCategories }
                variant='success'
                textButton='Добавить тип'
                onClick={ e => ExpensesCategoriesController.addAndLoadExpenseCategory(expenseCategory) }
            />
        </td>
    </tr>;
}
