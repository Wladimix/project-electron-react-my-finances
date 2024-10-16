import DistributionAndCategoryModal from "@renderer/components/Modals/DistributionAndCategoryModal.jsx";
import EditTransactionModal from "@renderer/components/Modals/EditTransactionModal.jsx";
import MonthlyYearlyResults from "@renderer/components/MonthlyYearlyResults.jsx";
import React, { useEffect } from "react";
import Services from "@renderer/services.js";
import Statistics from "@renderer/components/Statistics.jsx";
import TotalCard from "@renderer/components/Cards/TotalCard.jsx";
import Transactions from "@renderer/components/Transactions.jsx";

import { useDispatch } from "react-redux";

export default function App() {
    const dispatch = useDispatch();
    useEffect(() => { Services.loadAllData(dispatch) }, []);

    return (
        <>
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
