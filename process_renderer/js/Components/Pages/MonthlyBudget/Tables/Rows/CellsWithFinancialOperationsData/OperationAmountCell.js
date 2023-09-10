import React from 'react';

import Form from 'react-bootstrap/Form';

export default function OperationAmountCell({ operationAmount, classesNames }) {
    return <td className={classesNames.cellClassName}>
        <div className={classesNames.textClassName}>
            {operationAmount}
        </div>
        <div className={classesNames.inputClassName}>
            <Form.Control
                type='text'
                placeholder='Сумма'
            />
        </div>
    </td>;
}
