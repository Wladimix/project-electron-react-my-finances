import React from 'react';

import Table from 'react-bootstrap/Table';

import ButtonActions from '../../../../Functions/ButtonActions'
import RowWithAdditionType from './Rows/RowWithAdditionType';

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
                <RowWithAdditionType onClick={ButtonActions.addAndUpdateExpenseType} />
            </tbody>
        </Table>
    </>;
}
