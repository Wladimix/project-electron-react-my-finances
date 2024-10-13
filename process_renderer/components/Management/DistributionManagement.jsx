import DistributionCard from "@renderer/components/Cards/DistributionCard.jsx";
import React from "react";

export default function DistributionManagement() {
    return (
        <>
            <h3 className="uk-heading-line uk-width-expand">
                <span>Распределение финансов</span>
            </h3>

            <div className="uk-child-width-1-3@s uk-grid-match" data-uk-grid>
                <div>
                    <DistributionCard />
                </div>
                <div>
                    <DistributionCard />
                </div>
                <div>
                    <DistributionCard />
                </div>
                <div>
                    <DistributionCard />
                </div>

                <div>
                    <div className="uk-card uk-card-default uk-card-hover">
                        <div className="uk-card-body">
                            <input className="uk-input uk-margin" type="text" />
                            <input className="uk-input uk-form-large" type="text" />
                        </div>
                        <div className="uk-card-footer uk-text-right">
                            <button className="uk-button uk-button-default uk-button-primary uk-button-small">ДОБАВИТЬ</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
