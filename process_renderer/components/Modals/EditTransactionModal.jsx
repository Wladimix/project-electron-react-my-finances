import AddressOrCategoryInput from "@renderer/components/TransactionInputs/AddressOrCategoryInput.jsx";
import DateInput from "@renderer/components/TransactionInputs/DateInput.jsx";
import NoteInput from "@renderer/components/TransactionInputs/NoteInput.jsx";
import SourceOfTransactionInput from "@renderer/components/TransactionInputs/SourceOfTransactionInput.jsx";
import TransactionService from "@renderer/services/TransactionService.js";
import React from "react";

import { ADD_TRANSACTION_EVENT_TYPE, EDIT_TRANSACTION_EVENT_TYPE, FINANCIAL_INCOME, FINANCIAL_TRANSFER, FINANCIAL_EXPENCE, NOTE_MISSING, TYPE_NOT_DEFINE } from "@renderer/RendererConstants.js";
import { setNotes } from "@renderer/storage/dataSlice.js";
import { useDispatch, useSelector } from "react-redux";

export default function EditTransactionModal() {
    const transactionData = useSelector(state => state.transactionData);

    const dispatch = useDispatch();
    const transactionService = new TransactionService(dispatch, transactionData.data);

    const windowHeaders = {
        [ADD_TRANSACTION_EVENT_TYPE]: "Новая транзакция",
        [EDIT_TRANSACTION_EVENT_TYPE]: "Редактирование транзакции"
    };

    const transactionEvents = {
        [ADD_TRANSACTION_EVENT_TYPE]: () => { transactionService.addTransaction() },
        [EDIT_TRANSACTION_EVENT_TYPE]: () => { transactionService.editTransaction() }
    };

    const buttonValues = {
        [ADD_TRANSACTION_EVENT_TYPE]: "ДОБАВИТЬ",
        [EDIT_TRANSACTION_EVENT_TYPE]: "РЕДАКТИРОВАТЬ"
    };

    const alertClasses = {
        [FINANCIAL_INCOME]: "uk-text-center uk-alert-success",
        [FINANCIAL_TRANSFER]: "uk-text-center uk-alert-warning",
        [FINANCIAL_EXPENCE]: "uk-text-center uk-alert-danger",
        [TYPE_NOT_DEFINE]: "uk-text-center",
    };

    return (
        <div id="transaction" data-uk-modal container="false">
            <div className="uk-modal-dialog">

                <button className="uk-modal-close-default" type="button" data-uk-close></button>

                <div className="uk-modal-header">
                    <h2 className="uk-modal-title">
                        { windowHeaders[transactionData.eventType] }
                    </h2>
                </div>

                <div className="uk-modal-body">
                    <DateInput />
                    <SourceOfTransactionInput />
                    <AddressOrCategoryInput />
                    <NoteInput />

                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="price">Сумма / Цена</label>
                        <div className="uk-form-controls">
                            <input className="uk-input" id="price" type="text" />
                        </div>
                    </div>

                    <div className={alertClasses[transactionData.data.transactionType]} data-uk-alert>
                        <p>{transactionData.data.transactionType}</p>
                    </div>
                </div>

                <div className="uk-modal-footer uk-text-right">
                    <button
                        className="uk-button uk-button-default uk-modal-close"
                        onClick={() => { dispatch(setNotes([])) }}
                    >
                        ЗАКРЫТЬ
                    </button>
                    <button
                        className="uk-button uk-button-primary uk-modal-close"
                        onClick={transactionEvents[transactionData.eventType]}
                    >
                        {buttonValues[transactionData.eventType]}
                    </button>
                </div>

            </div>
        </div>
    );
};
