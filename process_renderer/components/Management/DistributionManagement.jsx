import DistributionCard from "@renderer/components/Cards/DistributionCard.jsx";
import React, { useState } from "react";
import Services from "@renderer/services.js";

import { useDispatch, useSelector } from "react-redux";

export default function DistributionManagement() {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const changeName = e => { setName(e.target.value) };
    const changeAmount = e => { setAmount(e.target.value) };

    const dispatch = useDispatch();
    const distributionTypes = useSelector(state => state.data.distributionFinancesTypes);

    const displayDistributionTypes = () => distributionTypes.map(distributionType => (
        <div key={distributionType.id}>
            <DistributionCard distributionType={distributionType} />
        </div>
    ));

    const addDistributionTypeEvent = () => {
        Services.addDistributionType(dispatch, name, amount);
        setName("");
        setAmount("");
    };

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
                            <input
                                className="uk-input uk-margin"
                                onChange={changeName}
                                type="text"
                                value={name}
                            />
                            <input
                                className="uk-input uk-form-large"
                                onChange={changeAmount}
                                type="text"
                                value={amount}
                            />
                        </div>
                        <div className="uk-card-footer uk-text-right">
                            <button
                                className="uk-button uk-button-default uk-button-primary uk-button-small"
                                disabled={!Services.checkDistributionType(name, amount)}
                                onClick={addDistributionTypeEvent}
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
