import React from "react";
import TransactionsTable from "@renderer/components/Tables/TransactionsTable.jsx";

export default function Transactions() {
    return (
        <>
            <div className="uk-grid">
                <h1 className="uk-padding-small">Транзакции</h1>

                <button className="uk-icon-link uk-padding-remove" data-uk-icon="icon: plus-circle; ratio: 2.5" data-uk-toggle="target: #transaction"></button>

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
