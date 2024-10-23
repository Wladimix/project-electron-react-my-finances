import DatePicker from "react-datepicker";
import React from "react";
import ru from "date-fns/locale/ru";
import TransactionService from "@renderer/services/TransactionService";

import { useDispatch, useSelector } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";

export default function DateInput() {
    const dispatch = useDispatch();
    const transactionService = new TransactionService(dispatch);
    const transactionData = useSelector(state => state.transactionData.data);

    return (
        <div className="uk-margin">
            <label className="uk-form-label" htmlFor="transaction-date">Дата транзакции</label>
            <div className="uk-form-controls">
                <DatePicker
                    className="uk-input"
                    dateFormat="dd MMMM YYYY"
                    id="transaction-date"
                    locale={ru}
                    onChange={date => transactionService.changeTransactionDataStorage(
                        { ...transactionData, date}
                    )}
                    selected={transactionData.date}
                    showTimeSelect
                    timeFormat="HH:mm"
                />
            </div>
        </div>
    );
};
