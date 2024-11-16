import MonthlyStatisticCard from "./Cards/MonthlyStatisticCard";
import YearlyStatisticCard from "./Cards/YearlyStatisticCard";

export default function Statistics() {
    return (
        <>
            <h1 id="statistics" className="uk-heading-line uk-width-expand">
                <span>
                    <button
                        className="uk-button uk-button-primary uk-margin-right"
                        uk-toggle="target: #category-management"
                    >
                        УПРАВЛЕНИЕ КАТЕГОРИЯМИ
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
