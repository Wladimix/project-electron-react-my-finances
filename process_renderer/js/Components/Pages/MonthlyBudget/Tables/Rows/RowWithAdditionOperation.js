import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useStore } from 'effector-react';
import CreatableSelect from 'react-select/creatable';

import InputsValuesStorage from '../../../../../Storage/InputsValuesStorage';
import ButtonActions from '../../../../../Functions/ButtonActions';
import InputsActions from '../../../../../Functions/InputsActions';

export default function RowWithAdditionOperation() {
    const nameOperationValue = useStore(InputsValuesStorage.$nameOperationValue);

    // МАССИВ С ОБЪЕКТАМИ ДОЛЖЕН БЫТЬ В STORAGE
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return <>
        <tr>
            <td>
                <Button
                    variant='success'
                    onClick={ () => ButtonActions.addAndUpdateOperation(nameOperationValue) }
                >
                    Добавить
                </Button>
            </td>
            <td>
                <CreatableSelect
                    classNamePrefix='react-select'
                    placeholder='Ед. бюджета'
                    formatCreateLabel={inputValue => `Добавить "${inputValue}"`}
                    options={ options }
                    onChange={ (newValue) => InputsActions.changeOfNameOperationValue(newValue.label) }
                />
            </td>
            <td><Form.Control type='text'/></td>
            <td><Form.Control type='text'/></td>
        </tr>
    </>;
}
