import React from "react";

import Table from "react-bootstrap/Table";

export default function ExpenseCategoriesTable() {
    return <Table className='expense-categories-table' striped bordered>
        <thead>
            <tr className='table-row'>
                <th colSpan={2}>Категории расходов</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>2</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
            </tr>
        </tbody>
    </Table>;
}
