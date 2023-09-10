import React from 'react';

import Select from 'react-select';

export default function DistributionFinancesCell({ distributionFinances, classesNames }) {
    return <td className={classesNames.cellClassName}>
        <div className={classesNames.textClassName}>
            {distributionFinances}
        </div>
        <div className={classesNames.inputClassName}>
            <Select
                classNamePrefix='single-react-select'
                placeholder='Распределение финансов'
            />
        </div>
    </td>;
}
