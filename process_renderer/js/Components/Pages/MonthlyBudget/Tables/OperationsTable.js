import React from 'react';

import Table from 'react-bootstrap/Table';

import RowsWithOperation from './Rows/RowsWithOperation';
import RowWithAdditionOperation from './Rows/RowWithAdditionOperation';

export default function OperationsTable() {
    return <>
        <Table striped bordered hover>
            <tbody>
                <RowsWithOperation/>
                <RowWithAdditionOperation/>
            </tbody>
        </Table>
    </>;
}
