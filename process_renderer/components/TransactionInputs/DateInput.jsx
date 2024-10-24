import DatePicker from "react-datepicker";
import React from "react";
import ru from "date-fns/locale/ru";
import TransactionService from "@renderer/services/TransactionService.js";

import { useDispatch, useSelector } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";

export default function DateInput() {
    const transactionData = useSelector(state => state.transactionData.data);

    const dispatch = useDispatch();
    const transactionService = new TransactionService(dispatch);

    const changeDateEvent = date => transactionService.changeTransactionDataStorage(
        { ...transactionData, date }
    );

    return (
        <div className="uk-margin">
            <label className="uk-form-label" htmlFor="transaction-date">Дата транзакции</label>
            <div className="uk-form-controls">
                <DatePicker
                    className="uk-input"
                    dateFormat="dd MMMM YYYY"
                    id="transaction-date"
                    locale={ru}
                    onChange={changeDateEvent}
                    selected={transactionData.date ? new Date(transactionData.date) : new Date()}
                    showTimeSelect
                    timeFormat="HH:mm"
                />
            </div>
        </div>
    );
};
