import React from "react";

import FormControl from "../TablesCellsContent/FormControl.jsx";
import AddingButton from "../TablesCellsContent/AddingButton.jsx";

export default function AdditionDistributionFinancesTypeRow() {
    return <tr className="table-row">
        <td className="table-cell">
            <FormControl placeholder="Новый тип"/>
        </td>
        <td className="table-cell">
            <AddingButton textButton="Добавить тип"/>
        </td>
    </tr>;
}
