import React from "react";
import ExpenditureStatistics from "@renderer/components/Statistics/ExpenditureStatistics.jsx";

import { NOT_DEFINE } from "@renderer/RendererConstants.js";
import { useSelector } from "react-redux";

export default function YearlyStatisticCard() {
    const selectedYear = useSelector(state => state.selectedDate.year);

    return (
        <div className="uk-card uk-card-default uk-card-body uk-background-muted">
            <button className="uk-button uk-button-default uk-card-badge uk-label">СТАТИСТИКА ПО ГОДАМ</button>
            <h1 className="uk-heading-medium">
                {selectedYear !== NOT_DEFINE ? selectedYear : <span data-uk-icon="icon: calendar; ratio: 3"></span>}
            </h1>
            <ExpenditureStatistics date={{ year: selectedYear }} />
        </div>
    );
};
