import React from 'react';

import Select from 'react-select';

export default function ExpensesTypeCell({ expensesType, classesNames }) {
    return <td className={classesNames.cellClassName}>
        <div className={classesNames.textClassName}>
            {expensesType}
        </div>
        <Select
            className={classesNames.inputClassName}
            classNamePrefix='grouped-react-select'
            placeholder='Категория расходов'
        />
    </td>;
}
