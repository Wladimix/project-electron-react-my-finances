import React from "react";

import Table from "react-bootstrap/Table";

import Actions from '../../../../Functions/Actions'
import RowWithAddition from "./Rows/RowWithAddition";

export default function TypesExpensesTable() {
    return <>
        <Table striped bordered hover>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                </tr>
                <RowWithAddition onClick={Actions.addExpenseType}/>
            </tbody>
        </Table>
    </>;
}
