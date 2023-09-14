import React from "react";

import Button from "../TablesCellsContent/Button.jsx";

export default function AdditionBudgetOperationRow() {
    return <tr className='table-row'>
        <td className='table-cell'>Дата</td>
        <td className='table-cell'>Единица бюджета</td>
        <td className='table-cell'>Сумма</td>
        <td className='table-cell'>Источник транзакции</td>
        <td className='table-cell'>Цель транзакции</td>
        <td className='table-cell'>
            <Button textButton='Добавить операцию' />
        </td>
    </tr>;
}
