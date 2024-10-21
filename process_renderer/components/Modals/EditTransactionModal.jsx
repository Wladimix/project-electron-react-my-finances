import React from "react";

export default function EditTransactionModal() {
    return (
        <div id="transaction" data-uk-modal container="false">
            <div className="uk-modal-dialog">

                <button className="uk-modal-close-default" type="button" data-uk-close></button>

                <div className="uk-modal-header">
                    <h2 className="uk-modal-title">Новая транзакция</h2>
                </div>

                <div className="uk-modal-body">
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="transaction-date">Дата транзакции</label>
                        <div className="uk-form-controls">
                            <input className="uk-input" id="transaction-date" type="text" />
                        </div>
                    </div>

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
                    <button className="uk-button uk-button-primary uk-modal-close">ДОБАВИТЬ</button>
                </div>

            </div>
        </div>
    );
};
