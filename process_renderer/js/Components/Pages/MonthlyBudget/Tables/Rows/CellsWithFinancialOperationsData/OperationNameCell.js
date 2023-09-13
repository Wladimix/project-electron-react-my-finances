import React from 'react';

import CreatableSelect from 'react-select/creatable';

export default function OperationNameCell({ operationName, classesNames }) {
    return <td className={ classesNames.cellClassName }>
        <div className={ classesNames.textClassName }>
            { operationName }
        </div>
        <CreatableSelect
            className={ classesNames.inputClassName }
            classNamePrefix='creatable-react-select'
            placeholder='Ед. бюджета'
        />
    </td>;
}
