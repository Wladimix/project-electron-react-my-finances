import React from "react";

import { useStore } from "effector-react";
import Table from "react-bootstrap/Table";

import RowWithDownloadNotification from "../TablesRows/RowWithDownloadNotification.jsx";
import ExpensesCategoriesRows from "../TablesRows/ExpensesCategoriesRows.jsx";
import AdditionExpenseCategoryRow from "../TablesRows/AdditionExpenseCategoryRow.jsx";

import DownloadProcessStorage from "../../Storages/DownloadProcessStorage.js";

export default function ExpensesCategoriesTable() {
    const isLoadingExpensesCategories = useStore(DownloadProcessStorage.$isLoadingExpensesCategories);

    return <Table className='expense-categories-table' striped bordered>
        <thead>
            <tr className='table-row'>
                <th colSpan={2}>Категории расходов</th>
            </tr>
        </thead>
        <tbody>
            {isLoadingExpensesCategories ? (
                <RowWithDownloadNotification
                    notificationText='Загрузка таблицы категорий расходов'
                    colSpan={2}
                />
            ) : (
                <ExpensesCategoriesRows/>
            )}
            <AdditionExpenseCategoryRow/>
        </tbody>
    </Table>;
}
