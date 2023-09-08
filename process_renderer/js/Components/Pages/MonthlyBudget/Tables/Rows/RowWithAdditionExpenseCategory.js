import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useStore } from 'effector-react';

import InputsValuesStorage from '../../../../../Storage/InputsValuesStorage';
import InputsActions from '../../../../../Functions/InputsActions';
import ButtonActions from '../../../../../Functions/ButtonActions';

export default function RowWithAdditionExpenseCategory() {
    const expenseCategoryValue = useStore(InputsValuesStorage.$expenseCategoryValue);

    return <>
        <tr>
            <td><Button variant='success' onClick={() => ButtonActions.addAndUpdateExpenseCategory(expenseCategoryValue) }>Добавить</Button></td>
            <td>
                <Form.Control
                    type='text'
                    placeholder='Категория'
                    value={ expenseCategoryValue }
                    onChange={ (event) => InputsActions.changeOfExpenseCategoryValue(event) }
                />
            </td>
        </tr>
    </>;
}
