import React from 'react';

import CreatableSelect from 'react-select/creatable';

export default function OperationNameCell({ index, selectedRow, operationName, cellsOverflowIsHidden, rowEditingMode, divisionsWithOperationsDataIsHidden }) {
    return <td className={cellsOverflowIsHidden ? 'cell-with-finance-operation-data hidden' : 'cell-with-finance-operation-data'}>
        <div
                        // вынести в отдельную функцию
            className={index === selectedRow ? ('cell-property' + (rowEditingMode ? ' editing-mode' : '') + (divisionsWithOperationsDataIsHidden ? ' hidden' : '')) : 'cell-property'}
        >
            {operationName}
        </div>
        <CreatableSelect
            className={index === selectedRow ? (rowEditingMode ? 'cell-input editing-mode' : 'cell-input') : 'cell-input'}
            classNamePrefix='creatable-react-select'
        />
    </td>;
}
