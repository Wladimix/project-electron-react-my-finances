import TransactionsTableRow from "./TransactionsTableRow";

import { useAppSelector } from "../../storage/store";

export default function TransactionsTable() {
    const transactions = useAppSelector(state => state.data.transactions);

    return (
        <table className="uk-table uk-table-hover uk-table-divider uk-margin-remove-top uk-margin-small-bottom">
            <thead>
                <tr>
                    <th className="uk-text-left">ДАТА</th>
                    <th className="uk-text-left">ИСТОЧНИК ТРАНЗАКЦИИ</th>
                    <th className="uk-text-left">АДРЕС / КАТЕГОРИЯ</th>
                    <th className="uk-text-left">ПРИМЕЧАНИЕ</th>
                    <th className="uk-text-left">СУММА / ЦЕНА</th>
                    <th className="uk-text-left uk-text-center">ДЕЙСТВИЯ</th>
                </tr>
            </thead>
            <tbody>
                {
                    transactions.map(transaction => (
                        <TransactionsTableRow key={transaction.id} transaction={transaction} />
                    ))
                }
            </tbody>
        </table>
    );
};
