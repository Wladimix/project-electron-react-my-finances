import React from 'react';
import { useStore } from 'effector-react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import InputsValuesStorage from '../../../../../Storage/InputsValuesStorage';
import ButtonActions from '../../../../../Functions/ButtonActions';
import InputsActions from '../../../../../Functions/InputsActions';

export default function RowWithAdditionOperation() {
    const nameOperationValue = useStore(InputsValuesStorage.$nameOperationValue);

    return <>
        <tr>
            <td><Button variant='success' onClick={ ButtonActions.addAndUpdateOperation }>Добавить</Button></td>
            <td><Form.Control type='text' value={ nameOperationValue } onChange={ InputsActions.changeOfNameOperationValue }/></td>
            <td><Form.Control type='text'/></td>
            <td><Form.Control type='text'/></td>
        </tr>
    </>;
}
