import React from "react";
import TransactionService from "@renderer/services/TransactionService";

import { EDIT_TRANSACTION_EVENT_TYPE } from "@renderer/RendererConstants.js";
import { useDispatch, useSelector } from "react-redux";

export default function TransactionsTableRow({ transaction }) {
    const dispatch = useDispatch();
    const transactionService = new TransactionService(dispatch);
    const transactionLoader = useSelector(state => state.loaders.editingTransactionLoader);

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
                            <td>{transaction.sourceOfTransactionName}</td>
                            <td>Продукты</td>
                            <td>Молоко</td>
                            <td className="uk-text-large uk-text-bold">500</td>
                            <td>
                                <button
                                    className="uk-icon-link"
                                    data-uk-icon="icon: pencil; ratio: 1.5"
                                    data-uk-toggle="target: #transaction"
                                    onClick={
                                        () => { transactionService.writeTransactionData(
                                            transaction,
                                            EDIT_TRANSACTION_EVENT_TYPE
                                        )}
                                    }
                                />
                                <button className="uk-icon-link" data-uk-icon="icon: trash; ratio: 1.5" />
                            </td>
                        </tr>

            }
        </>
    );
};
