import React from "react";

import { useStore } from "effector-react";

import DataFromDatabaseStorage from "../../Storages/DataFromDatabaseStorage.js";

export default function DistributionFinancesRows() {
    const dataForDistributionFinancesTable = useStore(DataFromDatabaseStorage.$dataForDistributionFinancesTable);

    return <>{
        dataForDistributionFinancesTable.map((elem) => {
            return <tr className='table-row' key={elem.id}>
                <td className="table-cell">{elem.name}</td>
                <td className="table-cell">сумма</td>
            </tr>
        })
    }</>;
}
