import ExpenditureStatistics from "@renderer/components/Statistics/ExpenditureStatistics.jsx";
import React from "react";

import { NOT_DEFINE } from "@renderer/RendererConstants.js";
import { useSelector } from "react-redux";

export default function MonthlyStatisticCard() {
    const selectedYear = useSelector(state => state.selectedDate.year);
    const selectedMonth = useSelector(state => state.selectedDate.month);

    return (
        <div className="uk-card uk-card-default uk-card-body uk-background-muted">
            <button className="uk-button uk-button-default uk-card-badge uk-label">СТАТИСТИКА ПО МЕСЯЦАМ</button>
            <h1 className="uk-heading-medium">
                {selectedMonth !== NOT_DEFINE ? selectedMonth : <span data-uk-icon="icon: calendar; ratio: 3"></span>}
            </h1>
            <ExpenditureStatistics date={{ year: selectedYear, month: selectedMonth }} />
        </div>
    );
};
