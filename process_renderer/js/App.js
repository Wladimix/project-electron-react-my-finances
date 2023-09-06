import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import MonthlyBudget from './Components/Pages/MonthlyBudget/MonthlyBudget';

export default function App() {
    return <>
        <div className='app-container'>
            <MonthlyBudget/>
        </div>
    </>;
}
