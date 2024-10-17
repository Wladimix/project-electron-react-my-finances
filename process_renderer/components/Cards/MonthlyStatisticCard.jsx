import React from "react";

export default function MonthlyStatisticCard() {
    return (
        <div className="uk-card uk-card-default uk-card-body uk-background-muted">
            <button className="uk-button uk-button-default uk-card-badge uk-label">СТАТИСТИКА ПОМЕСЯЧНО</button>
            <h1 className="uk-heading-medium uk-width-expand">Август</h1>

            <div className="uk-grid-small" data-uk-grid>
                <div className="uk-width-expand uk-text-large" data-uk-leader>Продукты</div>
                <div className="uk-text-large">100</div>
            </div>

            <div className="uk-grid-small" data-uk-grid>
                <div className="uk-width-expand uk-text-large" data-uk-leader>Одежда</div>
                <div className="uk-text-large">100</div>
            </div>

            <div className="uk-grid-small" data-uk-grid>
                <div className="uk-width-expand uk-text-large" data-uk-leader>Спорт</div>
                <div className="uk-text-large">100</div>
            </div>
        </div>
    );
};
