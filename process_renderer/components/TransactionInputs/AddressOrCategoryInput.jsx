import React from "react";
import TransactionService from "@renderer/services/TransactionService.js";

import { DISTRIBUTION_MODIFIER_ID, SPENDING_CATEGORY_MODIFIER_ID } from "@renderer/RendererConstants.js";
import { useDispatch, useSelector } from "react-redux";

export default function AddressOrCategoryInput() {
    const dispatch = useDispatch();
    const transactionService = new TransactionService(dispatch);
    const transactionData = useSelector(state => state.transactionData.data);
    const distributionTypes = useSelector(state => state.data.distributionFinancesTypes);
    const spendingCategories = useSelector(state => state.data.spendingCategories);

    function identifyAddressOrCategoryToSend(valueToSend) {
        const transactionAddressId = valueToSend.includes(DISTRIBUTION_MODIFIER_ID) ? clearId(valueToSend) : 1;
        const spendingCategoryId = valueToSend.includes(SPENDING_CATEGORY_MODIFIER_ID) ? clearId(valueToSend) : 1;
        return { ...transactionData, transactionAddressId, spendingCategoryId };
    };

    function identifyAddressOrCategoryToShow() {
        const transactionAddressId = transactionData.transactionAddressId !== 1
            ? DISTRIBUTION_MODIFIER_ID + transactionData.transactionAddressId
            : transactionData.transactionAddressId;

        const spendingCategoryId = transactionData.spendingCategoryId !== 1
            ? SPENDING_CATEGORY_MODIFIER_ID + transactionData.spendingCategoryId
            : transactionData.spendingCategoryId;

        return transactionAddressId !== 1 ? transactionAddressId : spendingCategoryId;
    };

    function clearId(id) {
        return +id.replace(/^\D+/g, "");
    };

    return (
        <div className="uk-margin">
            <label className="uk-form-label" htmlFor="address-or-category">Адрес / Категория</label>
            <div className="uk-form-controls">
                <select
                    className="uk-select"
                    id="address-or-category"
                    onChange={e => transactionService.changeTransactionDataStorage(
                        identifyAddressOrCategoryToSend(e.target.value)
                    )}
                    value={identifyAddressOrCategoryToShow()}
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
