import React from "react";
import Table from "react-bootstrap/Table";

import AdditionBudgetOperationRow from "../TablesRows/AdditionBudgetOperationRow.jsx";

export default function BudgetOperationsTable() {
    return <Table className='budget-operations-table table-light' striped bordered hover>
        <thead>
            <tr className='table-row'>
                <th colSpan={6}>Финансовые операции</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Дата</td>
                <td>Единица бюджета</td>
                <td>Сумма</td>
                <td>Источник транзакции</td>
                <td>Цель транзакции</td>
                <td>Кнопки</td>
            </tr>
            <tr>
                <td>Дата</td>
                <td>Единица бюджета</td>
                <td>Сумма</td>
                <td>Источник транзакции</td>
                <td>Цель транзакции</td>
                <td>Кнопки</td>
            </tr>
            <tr>
                <td>Дата</td>
                <td>Единица бюджета</td>
                <td>Сумма</td>
                <td>Источник транзакции</td>
                <td>Цель транзакции</td>
                <td>Кнопки</td>
            </tr>
            <AdditionBudgetOperationRow/>
        </tbody>
    </Table>;
}
