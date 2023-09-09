import React, { useState } from 'react';

import { useStore } from 'effector-react';

import UploadedDataStorage from '../../../../../Storage/UploadedDataStorage';
import OperationNameCell from './CellsWithFinancialOperationsData/OperationNameCell';


export default function RowsWithOperation() {
    const financialOperations = useStore(UploadedDataStorage.$financialOperations);

    const [selectedRow, setSelectedRow] = useState('');

    const [rowEditingMode, setRowEditingMode] = useState(false);
    const [cellsOverflowIsHidden, setCellsOverflowIsHidden] = useState(false);

    const [divisionsWithOperationsDataIsHidden, setDivisionsWithOperationsDataIsHidden] = useState(false);
    // возможно, не понадобится
    const [inputsWithOperationsDataIsHidden, setInputsWithOperationsDataIsHidden] = useState(false);

    function changeRowMode(selectedRowId) {
        setSelectedRow(selectedRowId)
        setRowEditingMode(!rowEditingMode);
        if (!rowEditingMode) {
            setCellsOverflowIsHidden(true);
            setTimeout(() => {
                setDivisionsWithOperationsDataIsHidden(true);
                setCellsOverflowIsHidden(false);
            }, 1000);
        } if (rowEditingMode) {
            setCellsOverflowIsHidden(true);
            setDivisionsWithOperationsDataIsHidden(false);
            setTimeout(() => {
                setCellsOverflowIsHidden(false);
            }, 1000);
        }
    }

    return <> {
        financialOperations.map((elem, index) => {
            return <tr key={index}>
                <td>{elem.operation_date}</td>
                <OperationNameCell
                    index={index}
                    selectedRow={selectedRow}
                    operationName={elem.operation_name}
                    cellsOverflowIsHidden={cellsOverflowIsHidden}
                    rowEditingMode={rowEditingMode}
                    divisionsWithOperationsDataIsHidden={divisionsWithOperationsDataIsHidden}
                />
                <td>{elem.operation_amount}</td>
                <td>{elem.first_category_name}</td>
                <td>{elem.second_category_name}</td>
                <td><button onClick={() => { changeRowMode(index) }}>test</button></td>
            </tr>;
        })
    } </>;
}
