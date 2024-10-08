import React from "react";
import { useStore } from "effector-react";
import Table from "react-bootstrap/Table";

import AdditionExpenseCategoryRow from "../TablesRows/AdditionExpenseCategoryRow.jsx";
import ExpensesCategoriesRows from "../TablesRows/ExpensesCategoriesRows.jsx";
import RowWithDownloadNotification from "../TablesRows/RowWithDownloadNotification.jsx";

import DownloadProcessStorage from "../../Storages/DownloadProcessStorage.js";

export default function ExpensesCategoriesTable() {
    const isLoadingExpensesCategoriesAfterAdding = useStore(DownloadProcessStorage.$isLoadingExpensesCategoriesAfterAdding);

    return <Table className='expense-categories-table table-secondary' striped bordered>
        <thead>
            <tr className='table-row'>
                <th colSpan={3}>Категории расходов</th>
            </tr>
        </thead>
        <tbody>
            {isLoadingExpensesCategoriesAfterAdding ? (
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
