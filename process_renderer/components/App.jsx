import DistributionAndCategoryModal from "@renderer/components/Modals/DistributionAndCategoryModal.jsx";
import EditTransactionModal from "@renderer/components/Modals/EditTransactionModal.jsx";
import MonthlyYearlyResults from "@renderer/components/MonthlyYearlyResults.jsx";
import React, { useEffect } from "react";
import Services from "@renderer/services/Services.js";
import Statistics from "@renderer/components/Statistics.jsx";
import TotalCard from "@renderer/components/Cards/TotalCard.jsx";
import Transactions from "@renderer/components/Transactions.jsx";

import { useDispatch, useSelector } from "react-redux";

export default function App() {
    const selectedYear = useSelector(state => state.selectedDate.year);
    const selectedMonth = useSelector(state => state.selectedDate.month);
    const transactionsLoader = useSelector(state => state.loaders.transactionsLoader);

    const dispatch = useDispatch();
    const services = new Services(dispatch);

    useEffect(() => { services.loadAllData({ year: selectedYear, month: selectedMonth }) }, []);

    return (
        <>
            <div className="uk-container uk-container-expand uk-padding">

                <TotalCard />
                <MonthlyYearlyResults />

                {
                    transactionsLoader
                        ?   <div className="uk-margin uk-text-large uk-text-center uk-alert-primary" data-uk-alert>
                                Загрузка транзакций... <div data-uk-spinner />
                            </div>
                        :   <Transactions />
                }

                <Statistics />

            </div>

            <EditTransactionModal />
            <DistributionAndCategoryModal />
        </>
    );
};
