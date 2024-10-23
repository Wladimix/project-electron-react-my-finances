import React from "react";
import TransactionService from "@renderer/services/TransactionService.js";
import TransactionsTable from "@renderer/components/Tables/TransactionsTable.jsx";

import { ADD_TRANSACTION_EVENT_TYPE } from "@renderer/RendererConstants.js";
import { useDispatch, useSelector } from "react-redux";

export default function Transactions() {
    const dispatch = useDispatch();
    const transactionService = new TransactionService(dispatch);
    const transactionData = useSelector(state => state.transactionData.data);

    return (
        <>
            <div className="uk-grid">
                <h1 className="uk-padding-small">Транзакции</h1>

                <button
                    className="uk-icon-link uk-padding-remove"
                    data-uk-icon="icon: plus-circle; ratio: 2.5"
                    data-uk-toggle="target: #transaction"
                    onClick={
                        () => { transactionService.writeTransactionData(
                            transactionService.makeInitialValues({
                                sourceOfTransactionId: 1,
                                transactionAddressId: 1,
                                spendingCategoryId: 1,
                                note: "note",
                                amount: "5000",
                                transactionType: "type"
                            }, transactionData),
                            ADD_TRANSACTION_EVENT_TYPE
                        ) }
                    }
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

                <label><input className="uk-checkbox uk-margin-small-right" type="checkbox" />За всё время</label>
            </div>

            <TransactionsTable />

            <nav aria-label="Pagination">
                <ul className="uk-pagination uk-flex-center" data-uk-margin>
                    <li><a href="#"><span data-uk-pagination-previous></span></a></li>
                    <li><a href="#">1</a></li>
                    <li className="uk-disabled"><span>…</span></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">6</a></li>
                    <li className="uk-active"><span aria-current="page">7</span></li>
                    <li><a href="#">8</a></li>
                    <li><a href="#">9</a></li>
                    <li><a href="#">10</a></li>
                    <li className="uk-disabled"><span>…</span></li>
                    <li><a href="#">20</a></li>
                    <li><a href="#"><span data-uk-pagination-next></span></a></li>
                </ul>
            </nav>
        </>
    );
};
