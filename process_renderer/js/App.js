import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect } from 'react';

import MonthlyBudget from './Components/Pages/MonthlyBudget/MonthlyBudget';
import LoadingData from './Functions/LoadingData';

export default function App() {
    useEffect(() => {
        LoadingData.updateDistributionFinancesTypes();
        LoadingData.updateExpensesCategories();
        LoadingData.updateBudgetUnits();
        LoadingData.updateOperations();
    }, []);

    return <>
        <div className='app-container'>
            <MonthlyBudget/>
        </div>
    </>;
}
