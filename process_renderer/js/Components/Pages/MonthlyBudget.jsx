import React from "react";

import "../../../css/MonthlyBudget.css";
import TableHeader from "../Tables/TableHeader.jsx";
import BudgetOperationsTable from "../Tables/BudgetOperationsTable.jsx";
import DistributionFinancesTable from "../Tables/DistributionFinancesTable.jsx";
import ExpenseCategoriesTable from "../Tables/ExpenseCategoriesTable.jsx";

export default function MonthlyBudget() {
    return <>
        <TableHeader/>
        <BudgetOperationsTable/>
        <div className="d-flex">
            <div className="distribution-finances-table-container"><DistributionFinancesTable/></div>
            <div className="expense-categories-table-container"><ExpenseCategoriesTable/></div>
        </div>

    </>;
}
