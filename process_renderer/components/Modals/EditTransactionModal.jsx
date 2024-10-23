import DateInput from "@renderer/components/TransactionInputs/DateInput.jsx";
import TransactionService from "@renderer/services/TransactionService.js";
import React from "react";

import { ADD_TRANSACTION_EVENT_TYPE, EDIT_TRANSACTION_EVENT_TYPE } from "@renderer/RendererConstants.js";
import { useDispatch, useSelector } from "react-redux";

export default function EditTransactionModal() {
    const dispatch = useDispatch();
    const transactionService = new TransactionService(dispatch);
    const transactionData = useSelector(state => state.transactionData);

    const windowHeaders = {
        [ADD_TRANSACTION_EVENT_TYPE]: "Новая транзакция",
        [EDIT_TRANSACTION_EVENT_TYPE]: "Редактирование транзакции"
    };

    const transactionEvents = {
        [ADD_TRANSACTION_EVENT_TYPE]: () => { transactionService.addTransaction(transactionData.data) },
        [EDIT_TRANSACTION_EVENT_TYPE]: () => { transactionService.editTransaction(transactionData.data) }
    };

    const buttonValue = {
        [ADD_TRANSACTION_EVENT_TYPE]: "ДОБАВИТЬ",
        [EDIT_TRANSACTION_EVENT_TYPE]: "РЕДАКТИРОВАТЬ"
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

                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="transaction-source">Источник транзакции</label>
                        <div className="uk-form-controls">
                            <select className="uk-select" id="transaction-source">
                                <option>Не выбран...</option>
                                <option>Карта МИР</option>
                                <option>Карта ВТБ</option>
                                <option>Ещё что-то</option>
                            </select>
                        </div>
                    </div>

                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="category">Категория / Счёт</label>
                        <div className="uk-form-controls">
                            <select className="uk-select" id="category">
                                <option>Не выбран...</option>
                                <option>Карта МИР</option>
                                <option>Карта ВТБ</option>
                                <option>Ещё что-то</option>
                            </select>
                        </div>
                    </div>

                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="purpose-of-expenditure">Примечание</label>
                        <div className="uk-form-controls">
                            <input className="uk-input" id="purpose-of-expenditure" type="text" />
                        </div>
                    </div>

                    <div>
                        <div className="uk-button uk-button-secondary uk-margin-small-bottom uk-margin-small-right">Молоко</div>
                        <div className="uk-button uk-button-secondary uk-margin-small-bottom uk-margin-small-right">Хлеб</div>
                        <div className="uk-button uk-button-secondary uk-margin-small-bottom uk-margin-small-right">Secondary</div>
                        <div className="uk-button uk-button-secondary uk-margin-small-bottom uk-margin-small-right">Secondary</div>
                        <div className="uk-button uk-button-secondary uk-margin-small-bottom uk-margin-small-right">Secondary</div>
                        <div className="uk-button uk-button-secondary uk-margin-small-bottom uk-margin-small-right">Secondary</div>
                        <div className="uk-button uk-button-secondary uk-margin-small-bottom uk-margin-small-right">Secondary</div>
                        <div className="uk-button uk-button-secondary uk-margin-small-bottom uk-margin-small-right">Secondary</div>
                        <div className="uk-button uk-button-secondary uk-margin-small-bottom uk-margin-small-right">Secondary</div>
                    </div>

                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="price">Сумма / Цена</label>
                        <div className="uk-form-controls">
                            <input className="uk-input" id="price" type="text" />
                        </div>
                    </div>
                </div>

                <div className="uk-modal-footer uk-text-right">
                    <button className="uk-button uk-button-default uk-modal-close">ЗАКРЫТЬ</button>
                    <button
                        className="uk-button uk-button-primary uk-modal-close"
                        onClick={transactionEvents[transactionData.eventType]}
                    >
                        {buttonValue[transactionData.eventType]}
                    </button>
                </div>

            </div>
        </div>
    );
};
