import React from "react";

import Table from "react-bootstrap/Table";
import TextInTableHeader from "../TablesCellsContent/TextInTableHeader.jsx";

export default function TableHeader() {
    return <Table className="table-header" bordered>
        <tbody>
            <tr className="table-row">
                <td rowSpan={2} className="table-secondary">
                    <TextInTableHeader sizeOfText="big" firstInscription='сентябрь' secondInscription='2023'/>
                </td>
                <td rowSpan={2} className="table-info">
                    <TextInTableHeader sizeOfText="big" firstInscription='Всего' secondInscription='3000000 Р' />
                </td>
                <td className="table-secondary">
                    <TextInTableHeader sizeOfText="small" firstInscription='Доход' secondInscription='50000 Р' />
                </td>
                <td className="table-success" rowSpan={2}>
                    <TextInTableHeader sizeOfText="big" firstInscription='Экономия' secondInscription='30000 Р' />
                </td>
            </tr>
            <tr>
                <td className="table-secondary">
                    <TextInTableHeader sizeOfText="small" firstInscription='Расход' secondInscription='20000 Р' />
                </td>
            </tr>
        </tbody>
    </Table>
}
