import React from 'react';

import Select from 'react-select';

export default function DistributionFinancesCell({ distributionFinances, classesNames }) {
    return <td className={ classesNames.cellClassName }>
        <div className={ classesNames.textClassName }>
            { distributionFinances }
        </div>
        <Select
            className={ classesNames.inputClassName }
            classNamePrefix='single-react-select'
            placeholder='Распределение финансов'
        />
    </td>;
}
