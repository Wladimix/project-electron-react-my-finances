import MonthlyStatisticCard from "@renderer/components/Cards/MonthlyStatisticCard.jsx";
import React from "react";
import YearlyStatisticCard from "@renderer/components/Cards/YearlyStatisticCard.jsx";

export default function Statistics() {
    return (
        <>
            <h1 className="uk-heading-line uk-width-expand">
                <span>
                    <button
                        className="uk-button uk-button-primary uk-margin-right"
                        uk-toggle="target: #category-management"
                    >
                        УПРАВЛЯТЬ КАТЕГОРИЯМИ
                    </button>
                    Статистика расходов
                </span>
            </h1>
            <div data-uk-grid>
                <div className="uk-width-1-2">
                    <YearlyStatisticCard />
                </div>
                <div className="uk-width-1-2">
                    <MonthlyStatisticCard />
                </div>
            </div>
        </>
    );
};
