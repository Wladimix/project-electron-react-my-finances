import React from "react";

import "../../../css/MonthlyBudget.css";
import TableHeader from "../Tables/TableHeader.jsx";
import FinancialOperationsTable from "../Tables/FinancialOperationsTable.jsx";

export default function MonthlyBudget() {
    return <>
        <TableHeader/>
        <FinancialOperationsTable/>
    </>;
}
