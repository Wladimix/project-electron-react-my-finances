import DistributionCard from "@renderer/components/Cards/DistributionCard.jsx";
import DistributionService from "@renderer/services/DistributionService.js";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

export default function DistributionManagement() {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const changeName = e => { setName(e.target.value) };
    const changeAmount = e => { setAmount(e.target.value) };

    const dispatch = useDispatch();
    const distributionService = new DistributionService(dispatch);

    const distributionTypes = useSelector(state => state.data.distributionFinancesTypes);
    const distributionLoader = useSelector(state => state.loaders.addingDistributionFinancesLoader);

    const addDistributionTypeEvent = () => {
        distributionService.addDistributionType(name, amount);
        setName("");
        setAmount("");
    };

    return (
        <>
            <h3 className="uk-heading-line uk-width-expand">
                <span>Распределение финансов</span>
            </h3>

            <div className="uk-child-width-1-3@s uk-grid-match" data-uk-grid>

                {
                    distributionTypes.map(distributionType => (
                        <DistributionCard key={distributionType.id} distributionType={distributionType} />
                    ))
                }

                {
                    distributionLoader
                        ?   <div className="uk-text-center">
                                <div data-uk-spinner="ratio: 8" />
                            </div>

                        :   <div>
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
                                            disabled={!distributionService.checkDistributionType(name, amount)}
                                            onClick={addDistributionTypeEvent}
                                        >
                                            ДОБАВИТЬ
                                        </button>
                                    </div>
                                </div>
                            </div>
                }

            </div>
        </>
    );
};
