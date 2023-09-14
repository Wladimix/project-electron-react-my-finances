import React from "react";

import Table from "react-bootstrap/Table";

export default function DistributionFinancesTable() {
    return <Table className="distribution-finances-table" striped bordered>
        <thead>
            <tr className="table-row">
                <th colSpan={2}>Распределение финансов</th>
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
            <tr>
                <td>1</td>
                <td>2</td>
            </tr>
        </tbody>
    </Table>;
}
