import DistributionAndCategoryModal from "@renderer/components/Modals/DistributionAndCategoryModal.jsx";
import EditTransactionModal from "@renderer/components/Modals/EditTransactionModal.jsx";
import MonthlyYearlyResults from "@renderer/components/MonthlyYearlyResults.jsx";
import React, { useEffect } from "react";
import Statistics from "@renderer/components/Statistics.jsx";
import TotalCard from "@renderer/components/Cards/TotalCard.jsx";
import Transactions from "@renderer/components/Transactions.jsx";

import { setDistributionTypes } from "@renderer/storage/DistributionSlice.js";
import { useDispatch } from "react-redux";

export default function App() {
    const dispatch = useDispatch();

    async function loadAllData() {
        const allDistributionTypes = await electron.getAllDistributionTypes();
        dispatch(setDistributionTypes(allDistributionTypes));
    };

    useEffect(() => {
        loadAllData();
    }, []);

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
