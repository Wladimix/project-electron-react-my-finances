import React from "react";
import TransactionsTableRow from "@renderer/components/Tables/TransactionsTableRow.jsx";

import { useSelector } from "react-redux";

export default function TransactionsTable() {
    const transactions = useSelector(state => state.data.transactions);
    console.log(transactions)

    return (
        <table className="uk-table uk-table-hover uk-table-divider uk-margin-remove-top uk-margin-small-bottom">
            <thead>
                <tr>
                    <th className="uk-text-left">ДАТА</th>
                    <th className="uk-text-left">ИСТОЧНИК ТРАНЗАКЦИИ</th>
                    <th className="uk-text-left">КАТЕГОРИЯ / СЧЁТ</th>
                    <th className="uk-text-left">ПРИМЕЧАНИЕ</th>
                    <th className="uk-text-left">СУММА / ЦЕНА</th>
                    <th className="uk-text-left">ДЕЙСТВИЯ</th>
                </tr>
            </thead>
            <tbody>

                {
                    transactions.map(transaction => (
                        <TransactionsTableRow />
                    ))
                }

            </tbody>
        </table>
    );
};
