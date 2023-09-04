import '../../../../css/MonthlyBudget.css';

import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MonthName from "./Titles/MonthName";
import TotalAmount from './Titles/TotalAmount';
import IncomeAndExpense from './Titles/IncomeAndExpense';
import MonthlySavings from './Titles/MonthlySavings';
import CardWithTable from '../../OtherComponents/CardWithTable';
import ExpensesTable from './Tables/ExpensesTable';
import DistributionFinancesTable from './Tables/DistributionFinancesTable';
import TypesExpensesTable from './Tables/TypesExpensesTable';

export default function MonthlyBudget() {
    return <>
        <Row>
            <Col xs={2} className='column'>
                <MonthName/>
            </Col>
            <Col xs={4} className='column total-amount'>
                <TotalAmount/>
            </Col>
            <Col className='column income-and-expense'>
                <IncomeAndExpense/>
            </Col>
            <Col className='column'>
                <MonthlySavings />
            </Col>
        </Row>
        <Row>
            <Col xs={6} className='column card-with-expenses-table'>
                <CardWithTable title='Траты' table={<ExpensesTable/>} />
            </Col>
            <Col className='column card-with-distribution-finances-table'>
                <CardWithTable title='Распределение финансов' table={<DistributionFinancesTable />} />
            </Col>
            <Col className='column card-with-types-expenses-table'>
                <CardWithTable title='Типы расходов' table={<TypesExpensesTable />} />
            </Col>
        </Row>
    </>;
}
