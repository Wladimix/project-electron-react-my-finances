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
                Дата
            </td>
            <td className='column-with-operation-name'>
                <CreatableSelect
                    classNamePrefix='creatable-react-select'
                    isClearable
                    placeholder='Ед. бюджета'
                    formatCreateLabel={inputValue => `Добавить "${inputValue}"`}
                    value={ DataProcessing.assignEmptyString(nameOperationValue) }
                    options={ DataProcessing.makeDataToDisplayBudgetUnits(budgetUnits) }
                    onChange={ newValue => InputsActions.changeOfNameOperationValue(newValue) }
                />
            </td>
            <td className='column-with-operation-amount'>
                <Form>
                    <Form.Control
                        type='text'
                        placeholder='Сумма'
                        value={ sumOperationValue }
                        onChange={ event => InputsActions.changeOfSumOperationValue(event) }
                    />
                </Form>
            </td>
            <td className='column-with-distribution-finances'>
                <Select
                    classNamePrefix="single-react-select"
                    placeholder='Распределение финансов'
                    options={ DataProcessing.makeDataWithDistributionFinancesTypes(distributionFinancesTypes) }
                    onChange={ newValue => InputsActions.changeOfFirstOperationCategoryValue(newValue) }
                />
            </td>
            <td className='column-with-expenses-category'>
                <Select
                    classNamePrefix='grouped-react-select'
                    placeholder='Категория расходов'
                    options={ DataProcessing.makeDataToDisplayBudgetCategories(distributionFinancesTypes, expensesCategories) }
                    onChange={ newValue => InputsActions.changeOfSecondOperationCategoryValue(newValue) }
                />
            </td>
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
        </tr>
    </>;
}
