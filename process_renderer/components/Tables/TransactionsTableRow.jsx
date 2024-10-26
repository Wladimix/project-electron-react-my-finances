import React from "react";
import TransactionService from "@renderer/services/TransactionService.js";

import { EDIT_TRANSACTION_EVENT_TYPE, FINANCIAL_INCOME, FINANCIAL_TRANSFER, FINANCIAL_EXPENCE, NOTE_MISSING, PRICE_MONITORING, TYPE_NOT_DEFINE } from "@renderer/RendererConstants.js";
import { useDispatch, useSelector } from "react-redux";

export default function TransactionsTableRow({ transaction }) {
    const transactionLoader = useSelector(state => state.loaders.editingTransactionLoader);

    const dispatch = useDispatch();
    const transactionService = new TransactionService(dispatch, transaction);

    const textClasses = {
        [FINANCIAL_INCOME]: "uk-text-large uk-text-bold uk-text-success",
        [FINANCIAL_TRANSFER]: "uk-text-large uk-text-bold uk-text-warning",
        [FINANCIAL_EXPENCE]: "uk-text-large uk-text-bold uk-text-danger",
        [PRICE_MONITORING]: "uk-text-large uk-text-bold",
        [TYPE_NOT_DEFINE]: "uk-text-large uk-text-bold",
    };

    const openModalEvent = () => {
        transactionService.writeTransactionData(EDIT_TRANSACTION_EVENT_TYPE);
    };

    return (
        <>
            {   transactionLoader
                    ?  <tr>
                            <td className="uk-text-large uk-text-center uk-text-warning" colSpan={6}>
                                Редактирование транзакции...
                                <div className="uk-margin-left" data-uk-spinner />
                            </td>
                        </tr>

                    :   <tr>
                            <td>{transactionService.makeDate(transaction.date)}</td>
                            <td>{transaction.sourceOfTransactionId !== 1 ? transaction.sourceOfTransactionName : "-"}</td>
                            <td>{transactionService.identifyAddressOrCategoryToShow(transaction)}</td>
                            <td>{transaction.note === NOTE_MISSING ? "-" : transaction.note}</td>
                            <td className={textClasses[transaction.transactionType]}>{transaction.amount}</td>
                            <td>
                                <button
                                    className="uk-icon-link"
                                    data-uk-icon="icon: pencil; ratio: 1.5"
                                    data-uk-toggle="target: #transaction"
                                    onClick={openModalEvent}
                                />
                                <button className="uk-icon-link" data-uk-icon="icon: trash; ratio: 1.5" />
                            </td>
                        </tr>

            }
        </>
    );
};
