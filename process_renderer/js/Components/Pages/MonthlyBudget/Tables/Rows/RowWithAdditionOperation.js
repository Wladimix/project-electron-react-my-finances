import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useStore } from 'effector-react';
import CreatableSelect from 'react-select/creatable';

import InputsValuesStorage from '../../../../../Storage/InputsValuesStorage';
import UploadedDataStorage from '../../../../../Storage/UploadedDataStorage';
import ButtonActions from '../../../../../Functions/ButtonActions';
import InputsActions from '../../../../../Functions/InputsActions';
import DataProcessing from '../../../../../Functions/DataProcessing';

export default function RowWithAdditionOperation() {
    const nameOperationValue = useStore(InputsValuesStorage.$nameOperationValue);
    const budgetUnits = useStore(UploadedDataStorage.$budgetUnits);

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
                    options={ DataProcessing.makeDataToDisplayBudgetUnits(budgetUnits) }
                    onChange={ (newValue) => InputsActions.changeOfNameOperationValue(newValue.label) }
                />
            </td>
            <td><Form.Control type='text'/></td>
            <td><Form.Control type='text'/></td>
        </tr>
    </>;
}
