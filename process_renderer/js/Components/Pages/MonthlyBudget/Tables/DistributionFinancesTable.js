import React from 'react';

import Table from 'react-bootstrap/Table';

import RowWithAdditionDistributionFinancesType from './Rows/RowWithAdditionDistributionFinancesType';

export default function DistributionFinancesTable() {
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
                <RowWithAdditionDistributionFinancesType/>
            </tbody>
        </Table>
    </>;
}
