import React from "react";

import { useStore } from "effector-react";

import DataFromDatabaseStorage from "../../Storages/DataFromDatabaseStorage.js";

export default function ExpensesCategoriesRows() {
    const dataForExpensesCategoriesTable = useStore(DataFromDatabaseStorage.$dataForExpensesCategoriesTable);

    return <>{
        dataForExpensesCategoriesTable.map((elem) => {
            return <tr className='table-row' key={elem.id}>
                <td className="table-cell">{elem.name}</td>
                <td className="table-cell">сумма</td>
            </tr>
        })
    }</>;
}
