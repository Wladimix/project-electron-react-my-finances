import React from "react";
import TransactionModalOutputService from "@renderer/services/TransactionModalOutputService.js";
import TransactionService from "@renderer/services/TransactionService.js";

import { DISTRIBUTION_MODIFIER_ID, SPENDING_CATEGORY_MODIFIER_ID } from "@renderer/RendererConstants.js";
import { useDispatch, useSelector } from "react-redux";

export default function AddressOrCategoryInput() {
    const transactionData = useSelector(state => state.transactionData.data);
    const distributionTypes = useSelector(state => state.data.distributionFinancesTypes);
    const spendingCategories = useSelector(state => state.data.spendingCategories);

    const dispatch = useDispatch();
    const transactionService = new TransactionService(dispatch, transactionData);
    const transactionModalOutputService = new TransactionModalOutputService(dispatch, transactionData)

    const changeTransactionDataEvent = e => transactionService.changeTransactionDataStorage(
        transactionService.identifyAddressOrCategoryToSend(e.target.value)
    );

    return (
        <div className="uk-margin">
            <label className="uk-form-label" htmlFor="address-or-category">Адрес / Категория</label>
            <div className="uk-form-controls">
                <select
                    className="uk-select"
                    id="address-or-category"
                    onChange={changeTransactionDataEvent}
                    value={transactionModalOutputService.identifyAddressOrCategoryToShow()}
                >

                    <option value={1}>значение не выбрано</option>
                    {
                        distributionTypes.map(distributionType => (
                            <option
                                className="uk-text-success"
                                key={distributionType.id}
                                value={DISTRIBUTION_MODIFIER_ID + distributionType.id}
                            >
                                {distributionType.name}
                            </option>
                        ))
                    }
                    {
                        spendingCategories.map(spendingCategory => (
                            <option
                                className="uk-text-danger"
                                key={spendingCategory.id}
                                value={SPENDING_CATEGORY_MODIFIER_ID + spendingCategory.id}
                            >
                                {spendingCategory.name}
                            </option>
                        ))
                    }

                </select>
            </div>
        </div>
    );
};
