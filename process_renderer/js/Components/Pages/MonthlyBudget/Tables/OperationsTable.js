import React from 'react';

import Table from 'react-bootstrap/Table';

import RowWithAdditionOperation from './Rows/RowWithAdditionOperation';

export default function OperationsTable() {
    return <>
        <Table striped bordered hover>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                </tr>
                <RowWithAdditionOperation/>
            </tbody>
        </Table>
    </>;
}
