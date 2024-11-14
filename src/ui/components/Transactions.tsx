import TransactionService from "../services/Transaction/TransactionService";
import TransactionsTable from "./Tables/TransactionsTable";

import { setEventType, setRequiredNote, setTransactionData } from "../storage/transactionSlice";
import { TransactionEvent } from "../constants";
import { useAppDispatch, useAppSelector } from "../storage/store";
import { setNotes } from "../storage/dataSlice";
import { useState } from "react";

export default function Transactions() {
    const transaction = useAppSelector(state => state.transaction);
    const date = useAppSelector(state => state.date);

    const [timerId, setTimerId] = useState<NodeJS.Timeout>();

    const dispatch = useAppDispatch();

    const openModalEvent = (): void => {
        dispatch(setEventType(TransactionEvent.ADD));
        dispatch(setNotes([]));
        dispatch(setTransactionData({ ...transaction.transactionData, date: new Date() }));
    };

    const changeNoteEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setRequiredNote(e.target.value.toLowerCase().replace(/ +/g, ' ')));

        clearTimeout(timerId);
        setTimerId(setTimeout(() => {

            new TransactionService(dispatch).loadTransactions(
                { year: date.selectedYear, month: date.selectedMonth, note: e.target.value.toLowerCase().trim().replace(/ +/g, ' ') }
            );

        }, 1000));
    };

    return (
        <>
            <div className="uk-grid">
                <h1>Транзакции</h1>

                <button
                    className="uk-icon-link uk-padding-remove uk-margin-small-left"
                    uk-icon="icon: plus-circle; ratio: 2.5"
                    uk-toggle="target: #transaction"
                    onClick={openModalEvent}
                />

                <div className="uk-width-expand uk-text-right">
                    <div className="uk-inline uk-width-1-2">
                        <span className="uk-form-icon" data-uk-icon="icon: search; ratio: 1.2" />
                        <input
                            aria-label="Not clickable icon"
                            className="uk-input"
                            onChange={changeNoteEvent}
                            placeholder="примечание"
                            type="text"
                            value={transaction.requiredNote}
                        />
                    </div>
                </div>
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
