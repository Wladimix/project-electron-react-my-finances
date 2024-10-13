import React from "react";

export default function TransactionsTableRow() {
    return (
        <tr>
            <td>22.08.2024</td>
            <td>Карта МИР</td>
            <td>Продукты</td>
            <td>Молоко</td>
            <td className="uk-text-large uk-text-bold">500</td>
            <td>
                <button className="uk-icon-link" data-uk-icon="icon: pencil; ratio: 1.5"></button>
                <button className="uk-icon-link" data-uk-icon="icon: trash; ratio: 1.5"></button>
            </td>
        </tr>
    );
};
