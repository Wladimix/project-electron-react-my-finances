import DistributionAndCategoryModal from "@renderer/components/Modals/DistributionAndCategoryModal.jsx";
import EditTransactionModal from "@renderer/components/Modals/EditTransactionModal.jsx";
import MonthlyYearlyResults from "@renderer/components/MonthlyYearlyResults.jsx";
import React from "react";
import Statistics from "@renderer/components/Statistics.jsx";
import TotalCard from "@renderer/components/Cards/TotalCard.jsx";
import Transactions from "@renderer/components/Transactions.jsx";

export default function App() {
    return (
        <>
            <button onClick={() => {
                electron.addDistributionType('Name', 1000.00).then((res) => console.log(res))
            }}>test</button>

            <div className="uk-container uk-container-expand uk-padding">
                <TotalCard />
                <MonthlyYearlyResults />
                <Transactions />
                <Statistics />
            </div>

            <EditTransactionModal />
            <DistributionAndCategoryModal />
        </>
    );
};
