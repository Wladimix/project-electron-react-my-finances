import React from 'react';

import { useStore } from 'effector-react';

import UploadedDataStorage from '../../../../../Storage/UploadedDataStorage';
import ComponentsModesStorage from '../../../../../Storage/ComponentsModesStorage';
import ComponentsAnimationsStorage from '../../../../../Storage/ComponentsAnimationsStorage';

import OperationNameCell from './CellsWithFinancialOperationsData/OperationNameCell';
import OperationAmountCell from './CellsWithFinancialOperationsData/OperationAmountCell';
import DistributionFinancesCell from './CellsWithFinancialOperationsData/DistributionFinancesCell';
import ExpensesTypeCell from './CellsWithFinancialOperationsData/ExpensesTypeCell';


export default function RowsWithOperation() {
    const financialOperations = useStore(UploadedDataStorage.$financialOperations);

    const rowEditingMode = useStore(ComponentsModesStorage.$rowEditingMode);
    const selectedRow = useStore(ComponentsAnimationsStorage.$selectedRow);
    const cellsOverflowIsHidden = useStore(ComponentsAnimationsStorage.$cellsOverflowIsHidden);
    const textWithOperationsDataIsHidden = useStore(ComponentsAnimationsStorage.$textWithOperationsDataIsHidden);
    const inputWithOperationsDataIsNotHidden = useStore(ComponentsAnimationsStorage.$inputWithOperationsDataIsNotHidden);

    function changeRowMode(selectedRowId) {
        ComponentsAnimationsStorage.setSelectedRow(selectedRowId);
        ComponentsModesStorage.setRowEditingMode(!rowEditingMode);

        if (!rowEditingMode) {
            ComponentsAnimationsStorage.setCellsOverflowIsHidden(true);
            ComponentsAnimationsStorage.setInputWithOperationsDataIsNotHidden(true);

            setTimeout(() => {
                ComponentsAnimationsStorage.setTextWithOperationsDataIsHidden(true);
                ComponentsAnimationsStorage.setCellsOverflowIsHidden(false);
            }, 200);

        } if (rowEditingMode) {
            ComponentsAnimationsStorage.setCellsOverflowIsHidden(true);
            ComponentsAnimationsStorage.setTextWithOperationsDataIsHidden(false);

            setTimeout(() => {
                ComponentsAnimationsStorage.setCellsOverflowIsHidden(false);
                ComponentsAnimationsStorage.setInputWithOperationsDataIsNotHidden(false);
            }, 200);
        }
    }

    function makeClassesNamesForRow(index) {
        let editingMode = '';
        if (rowEditingMode) editingMode = 'editing-mode'
        else editingMode = '';

        let textHidden = '';
        if (textWithOperationsDataIsHidden) textHidden = 'hidden'
        else textHidden = '';

        let inputHidden = '';
        if (inputWithOperationsDataIsNotHidden) inputHidden = 'not-hidden'
        else inputHidden = '';

        let cellClassName = '';
        if (cellsOverflowIsHidden) cellClassName = 'cell-with-finance-operation-data hidden'
        else cellClassName = 'cell-with-finance-operation-data';

        let textClassName = '';
        let inputClassName = '';
        if (index === selectedRow) {
            textClassName = `cell-property ${editingMode} ${textHidden}`;
            inputClassName = `cell-input ${editingMode} ${inputHidden}`;
        } else {
            textClassName = 'cell-property';
            inputClassName = 'cell-input';
        }

        return {
            cellClassName: cellClassName,
            textClassName: textClassName,
            inputClassName: inputClassName
        };
    }

    return <>{
        financialOperations.map((elem, index) => {
            return <tr key={index}>
                <td>{elem.operation_date}</td>
                <OperationNameCell operationName={ elem.operation_name } classesNames={ makeClassesNamesForRow(index) }/>
                <OperationAmountCell operationAmount={ elem.operation_amount } classesNames={ makeClassesNamesForRow(index) } />
                <DistributionFinancesCell distributionFinances={ elem.first_category_name } classesNames={ makeClassesNamesForRow(index) }/>
                <ExpensesTypeCell expensesType={ elem.second_category_name } classesNames={ makeClassesNamesForRow(index) } />
                <td><button onClick={() => { changeRowMode(index) }}>test</button></td>
            </tr>;
        })
    }</>;
}
