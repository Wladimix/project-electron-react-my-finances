import React from "react";

export default function DistributionCard({ distributionType }) {
    return (
        <div className="uk-card uk-card-default uk-card-hover">
            <div className="uk-card-body">
                <input
                    className="uk-input uk-margin"
                    placeholder={distributionType.name}
                    type="text"
                />
                <input
                    className="uk-input uk-form-large"
                    placeholder={distributionType.amount}
                    type="text"
                />
            </div>
            <div className="uk-card-footer uk-text-right">
                <button
                    className="uk-button uk-button-default uk-button-small"
                >
                    РЕДАКТИРОВАТЬ
                </button>
                <button
                    className="uk-button uk-button-default uk-button-small"
                >
                    УДАЛИТЬ
                </button>
            </div>
        </div>
    );
};
