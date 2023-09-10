import React  from 'react';

import { useStore } from 'effector-react';

import UploadedDataStorage from '../../../../../Storage/UploadedDataStorage';
import ComponentsModesStorage from '../../../../../Storage/ComponentsModesStorage';
import ComponentsAnimationsStorage from '../../../../../Storage/ComponentsAnimationsStorage';
import OperationNameCell from './CellsWithFinancialOperationsData/OperationNameCell';


export default function RowsWithOperation() {
    const financialOperations = useStore(UploadedDataStorage.$financialOperations);

    const rowEditingMode = useStore(ComponentsModesStorage.$rowEditingMode);
    const selectedRow = useStore(ComponentsAnimationsStorage.$selectedRow);
    const cellsOverflowIsHidden = useStore(ComponentsAnimationsStorage.$cellsOverflowIsHidden);
    const divisionsWithOperationsDataIsHidden = useStore(ComponentsAnimationsStorage.$divisionsWithOperationsDataIsHidden);

    function changeRowMode(selectedRowId) {
        ComponentsAnimationsStorage.setSelectedRow(selectedRowId);
        ComponentsModesStorage.setRowEditingMode(!rowEditingMode);

        if (!rowEditingMode) {
            ComponentsAnimationsStorage.setCellsOverflowIsHidden(true);

            setTimeout(() => {
                ComponentsAnimationsStorage.setDivisionsWithOperationsDataIsHidden(true);
                ComponentsAnimationsStorage.setCellsOverflowIsHidden(false);
            }, 500);

        } if (rowEditingMode) {
            ComponentsAnimationsStorage.setCellsOverflowIsHidden(true);
            ComponentsAnimationsStorage.setDivisionsWithOperationsDataIsHidden(false);

            setTimeout(() => {
                ComponentsAnimationsStorage.setCellsOverflowIsHidden(false);
            }, 500);
        }
    }

    function makeClassesNamesForRow(index) {
        let editingMode = '';
        if (rowEditingMode) editingMode = 'editing-mode'
        else editingMode = '';

        let divHidden = '';
        if (divisionsWithOperationsDataIsHidden) divHidden = 'hidden'
        else divHidden = '';

        let cellClassName = '';
        if (cellsOverflowIsHidden) cellClassName = 'cell-with-finance-operation-data hidden'
        else cellClassName = 'cell-with-finance-operation-data';

        let divisionClassName = '';
        let inputClassName = '';
        if (index === selectedRow) {
            divisionClassName = `cell-property ${editingMode} ${divHidden}`;
            inputClassName = `cell-input ${editingMode}`;
        } else {
            divisionClassName = 'cell-property';
            inputClassName = 'cell-input';
        }

        return {
            cellClassName: cellClassName,
            divisionClassName: divisionClassName,
            inputClassName: inputClassName
        };
    }

    return <>{
        financialOperations.map((elem, index) => {
            return <tr key={index}>
                <td>{elem.operation_date}</td>
                <OperationNameCell operationName={elem.operation_name} classesNames={makeClassesNamesForRow(index)}/>
                <td>{elem.operation_amount}</td>
                <td>{elem.first_category_name}</td>
                <td>{elem.second_category_name}</td>
                <td><button onClick={() => { changeRowMode(index) }}>test</button></td>
            </tr>;
        })
    }</>;
}
