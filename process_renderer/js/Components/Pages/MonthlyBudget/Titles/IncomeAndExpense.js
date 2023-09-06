import React from 'react';

import TitleWithValue from '../../../AuxiliaryComponents/TitleWithValue';

export default function IncomeAndExpense() {
    return <>
        <div className='monthly-income'>
            <TitleWithValue title='Доход за месяц' value='50000 Р' variant='warning'/>
        </div>
        <div className='monthly-expense'>
            <TitleWithValue title='Траты за месяц' value='30000 Р' variant='warning'/>
        </div>
    </>;
}
