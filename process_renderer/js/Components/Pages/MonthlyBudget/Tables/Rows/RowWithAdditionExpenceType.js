import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useStore } from 'effector-react';

import InputsValuesStorage from '../../../../../Storage/InputsValuesStorage';
import InputsActions from '../../../../../Functions/InputsActions';
import ButtonActions from '../../../../../Functions/ButtonActions';

export default function RowWithAdditionExpenceType() {
    const expenseTypeValue = useStore(InputsValuesStorage.$expenseTypeValue);

    return <>
        <tr>
            <td><Button variant='success' onClick={ () => ButtonActions.addAndUpdateExpenseType(expenseTypeValue) }>Добавить</Button></td>
            <td>
                <Form.Control
                    type='text'
                    placeholder='Категория'
                    value={ expenseTypeValue }
                    onChange={ (event) => InputsActions.changeOfExpenseTypeValue(event) }
                />
            </td>
        </tr>
    </>;
}
