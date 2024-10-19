import DistributionService from "@renderer/services/DistributionService";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

export default function DistributionCard({ distributionType }) {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const changeName = e => { setName(e.target.value) };
    const changeAmount = e => { setAmount(e.target.value) };

    const dispatch = useDispatch();
    const distributionService = new DistributionService(dispatch);

    const distributionLoader = useSelector(state => state.loaders.editingDistributionFinancesLoader);

    const editDistributionTypeEvent = () => {
        const distributionTypeName = name ? name : distributionType.name;
        const distributionTypeAmount = amount ? amount : distributionType.amount;
        distributionService.editDistributionType(distributionType.id, distributionTypeName, distributionTypeAmount);
        setName("");
        setAmount("");
    };

    const deleteDistributionTypeEvent = () => {
        distributionService.deleteDistributionType(distributionType.id);
    };

    return (
        <>
            {
                distributionLoader === distributionType.id
                    ?   <div className="uk-text-center">
                            <div data-uk-spinner="ratio: 8" />
                        </div>

                    :   <div>
                            <div className="uk-card uk-card-default uk-card-hover">
                                <div className="uk-card-body">
                                    <input
                                        className="uk-input uk-margin"
                                        onChange={changeName}
                                        placeholder={distributionType.name}
                                        type="text"
                                        value={name}
                                    />
                                    <input
                                        className="uk-input uk-form-large"
                                        onChange={changeAmount}
                                        placeholder={distributionType.amount}
                                        type="text"
                                        value={amount}
                                    />
                                </div>
                                <div className="uk-card-footer uk-text-right">
                                    <button
                                        className="uk-button uk-button-default uk-button-small"
                                        disabled={!distributionService.checkAmount(amount)}
                                        onClick={editDistributionTypeEvent}
                                    >
                                        РЕДАКТИРОВАТЬ
                                    </button>
                                    <button
                                        className="uk-button uk-button-default uk-button-small"
                                        disabled={distributionService.convertAmountToNumber(distributionType.amount) > 0}
                                        onClick={deleteDistributionTypeEvent}
                                    >
                                        УДАЛИТЬ
                                    </button>
                                </div>
                            </div>
                        </div>
            }
        </>
    );
};
