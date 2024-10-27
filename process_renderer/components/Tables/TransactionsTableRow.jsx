import React from "react";
import TransactionService from "@renderer/services/TransactionService.js";

import { EDIT_TRANSACTION_EVENT_TYPE } from "@renderer/RendererConstants.js";
import { useDispatch, useSelector } from "react-redux";

export default function TransactionsTableRow({ transaction }) {
    const transactionLoader = useSelector(state => state.loaders.editingTransactionLoader);

    const dispatch = useDispatch();
    const transactionService = new TransactionService(dispatch, transaction);
    const transactionParams = transactionService.makeTransactionParamsToShow();

    const data = transactionParams.data;
    const classes = transactionParams.classes;

    const openModalEvent = () => {
        transactionService.writeTransactionData(EDIT_TRANSACTION_EVENT_TYPE);
    };

    const deleteTransactionEvent = () => {
        transactionService.deleteTransaction();
    };

    return (
        <>
            {
                transactionLoader === transaction.id
                    ?  <tr>
                            <td className="uk-text-large uk-text-center uk-text-warning" colSpan={6}>
                                Работа с транзакцией...
                                <div className="uk-margin-left" data-uk-spinner />
                            </td>
                        </tr>

                    :   <tr>
                            <td>{data.date}</td>
                            <td className={classes.sourceOfTransaction}>{data.sourceOfTransaction}</td>
                            <td className={classes.addressOrCategory}>{data.addressOrCategory}</td>
                            <td>{data.note}</td>
                            <td className={classes.amount}>{data.amount}</td>
                            <td>
                                <button
                                    className="uk-icon-link"
                                    data-uk-icon="icon: pencil; ratio: 1.5"
                                    data-uk-toggle="target: #transaction"
                                    hidden={transactionParams.thereDeletedParameters}
                                    onClick={openModalEvent}
                                />
                                <button
                                    className="uk-icon-link"
                                    data-uk-icon="icon: trash; ratio: 1.5"
                                    hidden={transactionParams.thereDeletedParameters}
                                    onClick={deleteTransactionEvent}
                                />
                            </td>
                        </tr>
            }
        </>
    );
};
