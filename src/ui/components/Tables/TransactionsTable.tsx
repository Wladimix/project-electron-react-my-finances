import TransactionsTableRow from "./TransactionsTableRow";

export default function TransactionsTable() {
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
                    ['test'].map(transaction => (
                        <TransactionsTableRow key={transaction[0]} />
                    ))
                }
            </tbody>
        </table>
    );
};
