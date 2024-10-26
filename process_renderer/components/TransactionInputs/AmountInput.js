import React from "react";
import TransactionService from "@renderer/services/TransactionService.js";

import { useDispatch, useSelector } from "react-redux";

export default function Amountinput() {
    const transactionData = useSelector(state => state.transactionData.data);

    const dispatch = useDispatch();
    const transactionService = new TransactionService(dispatch);

    const changeAmountInputEvent = e => {
        transactionService.changeTransactionDataStorage({ ...transactionData, amount: e.target.value });
    };

    return (
        <div className="uk-margin">
            <label className="uk-form-label" htmlFor="price">Сумма / Цена</label>
            <div className="uk-form-controls">
                <input
                    className="uk-input"
                    id="price"
                    onChange={changeAmountInputEvent}
                    type="text"
                    value={transactionData.amount || ""}
                />
            </div>
        </div>
    );
};
