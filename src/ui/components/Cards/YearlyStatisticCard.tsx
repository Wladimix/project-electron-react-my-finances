import ExpenditureStatistics from "../Statistics/ExpenditureStatistics";

export default function YearlyStatisticCard() {
    return (
        <div className="uk-card uk-card-default uk-card-body uk-background-muted">
            <button className="uk-button uk-button-default uk-card-badge uk-label">СТАТИСТИКА ПО ГОДАМ</button>
            <h1 className="uk-heading-medium">
                год
            </h1>
            <ExpenditureStatistics />
        </div>
    );
};
