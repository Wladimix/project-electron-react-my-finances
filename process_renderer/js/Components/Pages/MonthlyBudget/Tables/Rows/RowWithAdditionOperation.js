import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useStore } from 'effector-react';
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';

import InputsValuesStorage from '../../../../../Storage/InputsValuesStorage';
import UploadedDataStorage from '../../../../../Storage/UploadedDataStorage';
import ButtonActions from '../../../../../Functions/ButtonActions';
import InputsActions from '../../../../../Functions/InputsActions';
import DataProcessing from '../../../../../Functions/DataProcessing';

export default function RowWithAdditionOperation() {
    const distributionFinancesTypes = useStore(UploadedDataStorage.$distributionFinancesTypes);
    const expensesCategories = useStore(UploadedDataStorage.$expensesCategories);

    const nameOperationValue = useStore(InputsValuesStorage.$nameOperationValue);
    const sumOperationValue = useStore(InputsValuesStorage.$sumOperationValue);
    const firstOperationCategoryValue = useStore(InputsValuesStorage.$firstOperationCategoryValue);
    const secondOperationCategoryValue = useStore(InputsValuesStorage.$secondOperationCategoryValue);

    const budgetUnits = useStore(UploadedDataStorage.$budgetUnits);

    return <>
        <tr>
            <td>
                <Button
                    variant='success'
                    onClick={
                        () => ButtonActions.addAndUpdateOperation(
                            nameOperationValue,
                            sumOperationValue,
                            DataProcessing.changeIdForSendToMainProcess(firstOperationCategoryValue.value),
                            DataProcessing.changeIdForSendToMainProcess(secondOperationCategoryValue.value)
                        )
                    }
                >
                    Добавить
                </Button>
            </td>
            <td>
                <CreatableSelect
                    classNamePrefix='creatable-react-select'
                    value={ DataProcessing.assignEmptyString(nameOperationValue) }
                    placeholder='Ед. бюджета'
                    formatCreateLabel={inputValue => `Добавить "${inputValue}"`}
                    options={ DataProcessing.makeDataToDisplayBudgetUnits(budgetUnits) }
                    onChange={ newValue => InputsActions.changeOfNameOperationValue(newValue.label) }
                />
            </td>
            <td>
                <Form.Control
                    type='text'
                    placeholder='Сумма'
                    value={ sumOperationValue }
                    onChange={ event => InputsActions.changeOfSumOperationValue(event) }
                />
            </td>
            <td>
                <Select
                    classNamePrefix="single-react-select"
                    options={ DataProcessing.makeDataWithDistributionFinancesTypes(distributionFinancesTypes) }
                    placeholder='Распределение финансов'
                    onChange={ newValue => InputsActions.changeOfFirstOperationCategoryValue(newValue) }
                />
            </td>
            <td>
                <Select
                    classNamePrefix='grouped-react-select'
                    options={ DataProcessing.makeDataToDisplayBudgetCategories(distributionFinancesTypes, expensesCategories) }
                    placeholder='Категория'
                    onChange={ newValue => InputsActions.changeOfSecondOperationCategoryValue(newValue) }
                />
            </td>
        </tr>
    </>;
}
