import React from "react";

export default function CategoryCard() {
    return (
        <div className="uk-card uk-card-secondary uk-card-hover uk-light">
            <div className="uk-card-body">
                <input className="uk-input uk-form-large" placeholder="Продукты" type="text" />
            </div>
            <div className="uk-card-footer uk-text-right">
                <button className="uk-button uk-button-default uk-button-small">РЕДАКТИРОВАТЬ</button>
                <button className="uk-button uk-button-default uk-button-small">УДАЛИТЬ</button>
            </div>
        </div>
    );
};
