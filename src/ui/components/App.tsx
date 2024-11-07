import DistributionAndCategoryModal from "./Modals/DistributionAndCategoryModal";
import EditTransactionModal from "./Modals/EditTransactionModal";
import MonthlyYearlyResults from "./MonthlyYearlyResults";
import TotalCard from "./Cards/TotalCard";
import Transactions from "./Transactions";
import Statistics from "./Statistics";

export default function App() {
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
