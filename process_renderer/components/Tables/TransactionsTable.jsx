import React from "react";
import TransactionsTableRow from "@renderer/components/Tables/TransactionsTableRow.jsx";

import { useSelector } from "react-redux";

export default function TransactionsTable() {
    const transactions = useSelector(state => state.data.transactions);
    const addingTransactionLoader = useSelector(state => state.loaders.addingTransactionLoader);
    /* // NOTE: загруженные транзакции
    console.log("transactions")
    console.log(transactions) */

    return (
        <table className="uk-table uk-table-hover uk-table-divider uk-margin-remove-top uk-margin-small-bottom">
            <thead>
                <tr>
                    <th className="uk-text-left">ДАТА</th>
                    <th className="uk-text-left">ИСТОЧНИК ТРАНЗАКЦИИ</th>
                    <th className="uk-text-left">АДРЕС / КАТЕГОРИЯ</th>
                    <th className="uk-text-left">ПРИМЕЧАНИЕ</th>
                    <th className="uk-text-left">СУММА / ЦЕНА</th>
                    <th className="uk-text-left">ДЕЙСТВИЯ</th>
                </tr>
            </thead>
            <tbody>

                {
                    addingTransactionLoader &&
                    <tr>
                        <td className="uk-text-large uk-text-center uk-text-warning" colSpan={6}>
                            Добавление транзакции...
                            <div className="uk-margin-left" data-uk-spinner />
                        </td>
                    </tr>
                }

                {
                    transactions.length
                        ?   transactions.map(transaction => (
                                <TransactionsTableRow key={transaction.id} transaction={transaction} />
                            ))
                        :   <tr>
                                <td className="uk-text-large uk-text-primary" colSpan={6}>Финансовые операции отсутствуют</td>
                            </tr>
                }

            </tbody>
        </table>
    );
};
