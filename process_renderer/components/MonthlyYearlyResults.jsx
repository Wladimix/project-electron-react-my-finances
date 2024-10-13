import React from "react";
import MonthlyResultsCard from "@renderer/components/Cards/MonthlyResultsCard.jsx";
import YearlyResultsCard from "@renderer/components/Cards/YearlyResultsCard.jsx";

export default function MonthlyYearlyResults() {
    return (
        <div data-uk-grid>
            <div className="uk-width-1-2">
                <YearlyResultsCard />
            </div>
            <div className="uk-width-1-2">
                <MonthlyResultsCard />
            </div>
        </div>
    );
};
