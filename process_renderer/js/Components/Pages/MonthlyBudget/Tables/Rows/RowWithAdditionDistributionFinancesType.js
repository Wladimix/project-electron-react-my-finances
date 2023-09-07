import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useStore } from 'effector-react';

import InputsValuesStorage from '../../../../../Storage/InputsValuesStorage';
import InputsActions from '../../../../../Functions/InputsActions';
import ButtonActions from '../../../../../Functions/ButtonActions';

export default function RowWithAdditionDistributionFinancesType() {
    const distributionFinancesTypeValue = useStore(InputsValuesStorage.$distributionFinancesTypeValue);

    return <>
        <tr>
            <td><Button variant='success' onClick={ () => ButtonActions.addAndUpdateDistributionFinancesType(distributionFinancesTypeValue) }>Добавить</Button></td>
            <td>
                <Form.Control
                    type='text'
                    placeholder='Категория'
                    value={ distributionFinancesTypeValue }
                    onChange={ (event) => InputsActions.changeOfDistributionFinancesTypeValue(event) }
                />
            </td>
        </tr>
    </>
}
