import DistributionCard from "@renderer/components/Cards/DistributionCard.jsx";
import React from "react";

import { useSelector } from "react-redux";

export default function DistributionManagement() {
    const distributionTypes = useSelector(state => state.distributionFinances);

    const displayDistributionTypes = () => distributionTypes.map(distributionType => (
        <div key={distributionType.id}>
            <DistributionCard distributionType={distributionType} />
        </div>
    ));

    return (
        <>
            <h3 className="uk-heading-line uk-width-expand">
                <span>Распределение финансов</span>
            </h3>

            <div className="uk-child-width-1-3@s uk-grid-match" data-uk-grid>
                {displayDistributionTypes()}

                <div>
                    <div className="uk-card uk-card-default uk-card-hover">
                        <div className="uk-card-body">
                            <input className="uk-input uk-margin" type="text" />
                            <input className="uk-input uk-form-large" type="text" />
                        </div>
                        <div className="uk-card-footer uk-text-right">
                            <button
                                className="uk-button uk-button-default uk-button-primary uk-button-small"
                                onClick={() => {
                                    electron.addDistributionType({ name: "Name", amount: "10000.05" })
                                    electron.getAllDistributionTypes().then((res) => console.log(res))
                                }}
                            >
                                ДОБАВИТЬ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
