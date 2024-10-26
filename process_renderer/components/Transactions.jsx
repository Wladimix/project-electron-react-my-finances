import React from "react";
import TransactionService from "@renderer/services/TransactionService.js";
import TransactionsTable from "@renderer/components/Tables/TransactionsTable.jsx";

import { ADD_TRANSACTION_EVENT_TYPE, NOTE_MISSING } from "@renderer/RendererConstants.js";
import { useDispatch, useSelector } from "react-redux";

const initialValues = {
    sourceOfTransactionId: 1,
    transactionAddressId: 1,
    spendingCategoryId: 1,
    note: NOTE_MISSING,
    amount: "",
    transactionType: "type"
};

export default function Transactions() {
    const transactionData = useSelector(state => state.transactionData.data);

    const dispatch = useDispatch();
    const transactionService = new TransactionService(dispatch, transactionData);

    const openModalEvent = () => {
        transactionService.writeTransactionData(ADD_TRANSACTION_EVENT_TYPE, initialValues);
    };

    return (
        <>
            <div className="uk-grid">
                <h1>Транзакции</h1>

                <button
                    className="uk-icon-link uk-padding-remove uk-margin-small-left"
                    data-uk-icon="icon: plus-circle; ratio: 2.5"
                    data-uk-toggle="target: #transaction"
                    onClick={openModalEvent}
                />

                <div className="uk-width-expand uk-text-right">
                    <div className="uk-inline">
                        <span className="uk-form-icon" data-uk-icon="icon: search"></span>
                        <input className="uk-input" type="text" placeholder="примечание" aria-label="Not clickable icon" />
                    </div>
                </div>

                <div className="uk-form-controls">
                    <select className="uk-select" id="form-stacked-select">
                        <option>Все транзакции</option>
                        <option>Пополнения</option>
                        <option>Переводы</option>
                        <option>Траты</option>
                    </select>
                </div>
            </div>

            <TransactionsTable />

            <nav>
                <ul className="uk-pagination uk-flex-center">
                    <li><a href="#"><span data-uk-pagination-previous></span></a></li>
                    <li><a href="#">янв</a></li>
                    <li><a href="#">фев</a></li>
                    <li><a href="#">мар</a></li>
                    <li><a href="#">апр</a></li>
                    <li className="uk-active"><span>май</span></li>
                    <li><a href="#">июн</a></li>
                    <li><a href="#">июл</a></li>
                    <li><a href="#">авг</a></li>
                    <li><a href="#">сен</a></li>
                    <li><a href="#">окт</a></li>
                    <li><a href="#">ноя</a></li>
                    <li><a href="#">дек</a></li>
                    <li><a href="#"><span data-uk-pagination-next></span></a></li>
                </ul>
            </nav>
        </>
    );
};
