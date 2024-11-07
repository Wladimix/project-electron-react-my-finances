import ExpenditureStatistics from "../Statistics/ExpenditureStatistics";

export default function MonthlyStatisticCard() {
    return (
        <div className="uk-card uk-card-default uk-card-body uk-background-muted">
            <button className="uk-button uk-button-default uk-card-badge uk-label">СТАТИСТИКА ПО МЕСЯЦАМ</button>
            <h1 className="uk-heading-medium">
                месяц
            </h1>
            <ExpenditureStatistics />
        </div>
    );
};
