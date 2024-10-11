import React from "react";

export default function App() {
    return (
        <>
            <button onClick={() => {
                electron.notificationApi.sendNotification("Моё сообщение")
            }}>test</button>

            <div className="uk-container uk-container-expand uk-padding">
                <div className="uk-card uk-card-default uk-card-body uk-margin">
                    <table className="uk-table uk-table-small">
                        <tbody>
                            <tr>
                                <td><h1 className="uk-text-bold uk-text-primary">Всего в наличии</h1></td>
                                <td><h1 className="uk-text-primary uk-text-right">50 000 ₽</h1></td>
                            </tr>
                            <tr>
                                <td><h2 className="uk-text-bold">Годовая инфляция</h2></td>
                                <td><h2 className="uk-text-right">5%</h2></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div data-uk-grid>
                    <div className="uk-width-1-2">
                        <div className="uk-card uk-card-default uk-card-body uk-background-muted">
                            <table className="uk-table uk-table-small">
                                <tbody>
                                    <tr>
                                        <td><h1>Год</h1></td>
                                        <td className="uk-text-right uk-width-small">
                                            <select className="uk-select uk-text-large">
                                                <option>2024</option>
                                                <option>2025</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="uk-text-large">Доходы</td>
                                        <td className="uk-text-large uk-text-right">3000</td>
                                    </tr>
                                    <tr>
                                        <td className="uk-text-large">Расходы</td>
                                        <td className="uk-text-large uk-text-right">2000</td>
                                    </tr>
                                    <tr>
                                        <td className="uk-text-success uk-text-large">Экономия</td>
                                        <td className="uk-text-success uk-text-right uk-text-large">1000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="uk-width-1-2">
                        <div className="uk-card uk-card-default uk-card-body uk-background-muted">
                            <table className="uk-table uk-table-small">
                                <tbody>
                                    <tr>
                                        <td><h1>Месяц</h1></td>
                                        <td className="uk-text-right uk-width-1-3">
                                            <select className="uk-select uk-text-large">
                                                <option>Август</option>
                                                <option>Сентябрь</option>
                                                <option>Октябрь</option>
                                                <option>Ноябрь</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="uk-text-large">Доходы</td>
                                        <td className="uk-text-large uk-text-right">3000</td>
                                    </tr>
                                    <tr>
                                        <td className="uk-text-large">Расходы</td>
                                        <td className="uk-text-large uk-text-right">2000</td>
                                    </tr>
                                    <tr>
                                        <td className="uk-text-success uk-text-large">Экономия</td>
                                        <td className="uk-text-success uk-text-right uk-text-large">1000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="uk-grid">
                    <h1 className="uk-padding-small">Транзакции</h1>
                    <button className="uk-icon-link uk-padding-remove" data-uk-icon="icon: plus-circle; ratio: 2.5" data-uk-toggle="target: #transaction"></button>
                    <div className="uk-width-expand uk-text-right">
                        <div className="uk-inline">
                            <span className="uk-form-icon" data-uk-icon="icon: search"></span>
                            <input className="uk-input" type="text" placeholder="цель расхода" aria-label="Not clickable icon" />
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
                <table className="uk-table uk-table-hover uk-table-divider">
                    <thead>
                        <tr>
                            <th className="uk-text-left">ДАТА</th>
                            <th className="uk-text-left">ИСТОЧНИК ТРАНЗАКЦИИ</th>
                            <th className="uk-text-left">КАТЕГОРИЯ / СЧЁТ</th>
                            <th className="uk-text-left">ЦЕЛЬ РАСХОДА</th>
                            <th className="uk-text-left">СУММА / ЦЕНА</th>
                            <th className="uk-text-left">ДЕЙСТВИЯ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>22.08.2024</td>
                            <td>Карта МИР</td>
                            <td>Продукты</td>
                            <td><button className="uk-button uk-button-default">Молоко</button></td>
                            <td className="uk-text-large uk-text-bold">500</td>
                            <td>
                                <button className="uk-icon-link" data-uk-icon="icon: pencil; ratio: 1.5"></button>
                                <button className="uk-icon-link" data-uk-icon="icon: trash; ratio: 1.5"></button>
                            </td>
                        </tr>
                        <tr>
                            <td>22.08.2024</td>
                            <td>Карта МИР</td>
                            <td>...</td>
                            <td>...</td>
                            <td className="uk-text-large uk-text-bold uk-text-success">500</td>
                            <td>
                                <button className="uk-icon-link" data-uk-icon="icon: pencil; ratio: 1.5"></button>
                                <button className="uk-icon-link" data-uk-icon="icon: trash; ratio: 1.5"></button>
                            </td>
                        </tr>
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
                    </tbody>
                </table>
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
                <h1 className="uk-heading-line uk-width-expand">
                    <span>
                        <button className="uk-button uk-button-primary uk-margin-right" data-uk-toggle="target: #category-management">УПРАВЛЯТЬ КАТЕГОРИЯМИ</button>
                        Статистика расходов
                    </span>
                </h1>

                <div data-uk-grid>
                    <div className="uk-width-1-2">
                        <div className="uk-card uk-card-default uk-card-body uk-background-muted">
                            <div className="uk-grid-small" data-uk-grid>
                                <h1 className="uk-heading-medium uk-width-expand">2024</h1>
                                <button className="uk-icon-link" data-uk-icon="icon: grid; ratio: 2.5"></button>
                            </div>
                            <div className="uk-grid-small" data-uk-grid>
                                <div className="uk-width-expand uk-text-large" data-uk-leader>Продукты</div>
                                <div className="uk-text-large">100</div>
                            </div>
                            <div className="uk-grid-small" data-uk-grid>
                                <div className="uk-width-expand uk-text-large" data-uk-leader>Одежда</div>
                                <div className="uk-text-large">100</div>
                            </div>
                            <div className="uk-grid-small" data-uk-grid>
                                <div className="uk-width-expand uk-text-large" data-uk-leader>Спорт</div>
                                <div className="uk-text-large">100</div>
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-1-2">
                        <div className="uk-card uk-card-default uk-card-body uk-background-muted">
                            <div className="uk-grid-small" data-uk-grid>
                                <h1 className="uk-heading-medium uk-width-expand">Август</h1>
                                <button className="uk-icon-link" data-uk-icon="icon: grid; ratio: 2.5"></button>
                            </div>
                            <div className="uk-grid-small" data-uk-grid>
                                <div className="uk-width-expand uk-text-large" data-uk-leader>Продукты</div>
                                <div className="uk-text-large">100</div>
                            </div>
                            <div className="uk-grid-small" data-uk-grid>
                                <div className="uk-width-expand uk-text-large" data-uk-leader>Одежда</div>
                                <div className="uk-text-large">100</div>
                            </div>
                            <div className="uk-grid-small" data-uk-grid>
                                <div className="uk-width-expand uk-text-large" data-uk-leader>Спорт</div>
                                <div className="uk-text-large">100</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="transaction" data-uk-modal>
                <div className="uk-modal-dialog">
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
                            <label className="uk-form-label" htmlFor="purpose-of-expenditure">Цель расхода</label>
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
            <div id="category-management" className="uk-modal-container" data-uk-modal>
                <div className="uk-modal-dialog">
                    <div className="uk-modal-header">
                        <h2 className="uk-modal-title">Управление категориями</h2>
                    </div>
                    <div className="uk-modal-body">
                        <h3 className="uk-heading-line uk-width-expand">
                            <span>Распределение финансов</span>
                        </h3>
                        <input className="uk-input uk-form-width-medium uk-margin-bottom" type="text" />
                        <button className="uk-button uk-button-primary uk-margin-bottom">ДОБАВИТЬ</button>
                        <div className="uk-child-width-1-3@s uk-grid-match" data-uk-grid>
                            <div>
                                <div className="uk-card uk-card-default uk-card-hover">
                                    <div className="uk-card-body">
                                        <input className="uk-input uk-margin" placeholder="Карта МИР" type="text" />
                                        <input className="uk-input uk-form-large" placeholder="3 000" type="text" />
                                    </div>
                                    <div className="uk-card-footer uk-text-right">
                                        <button className="uk-button uk-button-default uk-button-small">РЕДАКТИРОВАТЬ</button>
                                        <button className="uk-button uk-button-default uk-button-small">УДАЛИТЬ</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default uk-card-hover">
                                    <div className="uk-card-body">
                                        <input className="uk-input uk-margin" placeholder="Карта МИР" type="text" />
                                        <input className="uk-input uk-form-large" placeholder="3 000" type="text" />
                                    </div>
                                    <div className="uk-card-footer uk-text-right">
                                        <button className="uk-button uk-button-default uk-button-small">РЕДАКТИРОВАТЬ</button>
                                        <button className="uk-button uk-button-default uk-button-small">УДАЛИТЬ</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default uk-card-hover">
                                    <div className="uk-card-body">
                                        <input className="uk-input uk-margin" placeholder="Карта МИР" type="text" />
                                        <input className="uk-input uk-form-large" placeholder="3 000" type="text" />
                                    </div>
                                    <div className="uk-card-footer uk-text-right">
                                        <button className="uk-button uk-button-default uk-button-small">РЕДАКТИРОВАТЬ</button>
                                        <button className="uk-button uk-button-default uk-button-small">УДАЛИТЬ</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default uk-card-hover">
                                    <div className="uk-card-body">
                                        <input className="uk-input uk-margin" placeholder="Карта МИР" type="text" />
                                        <input className="uk-input uk-form-large" placeholder="3 000" type="text" />
                                    </div>
                                    <div className="uk-card-footer uk-text-right">
                                        <button className="uk-button uk-button-default uk-button-small">РЕДАКТИРОВАТЬ</button>
                                        <button className="uk-button uk-button-default uk-button-small">УДАЛИТЬ</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 className="uk-heading-line uk-width-expand">
                            <span>Категории расходов</span>
                        </h3>
                        <input className="uk-input uk-form-width-medium uk-margin-bottom" type="text" />
                        <button className="uk-button uk-button-primary uk-margin-bottom">ДОБАВИТЬ</button>
                        <div className="uk-child-width-1-3@s uk-grid-match" data-uk-grid>
                            <div>
                                <div className="uk-card uk-card-secondary uk-card-hover uk-light">
                                    <div className="uk-card-body">
                                        <input className="uk-input uk-form-large" placeholder="Продукты" type="text" />
                                    </div>
                                    <div className="uk-card-footer uk-text-right">
                                        <button className="uk-button uk-button-default uk-button-small">РЕДАКТИРОВАТЬ</button>
                                        <button className="uk-button uk-button-default uk-button-small">УДАЛИТЬ</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-secondary uk-card-hover uk-light">
                                    <div className="uk-card-body">
                                        <input className="uk-input uk-form-large" placeholder="Продукты" type="text" />
                                    </div>
                                    <div className="uk-card-footer uk-text-right">
                                        <button className="uk-button uk-button-default uk-button-small">РЕДАКТИРОВАТЬ</button>
                                        <button className="uk-button uk-button-default uk-button-small">УДАЛИТЬ</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-secondary uk-card-hover uk-light">
                                    <div className="uk-card-body">
                                        <input className="uk-input uk-form-large" placeholder="Продукты" type="text" />
                                    </div>
                                    <div className="uk-card-footer uk-text-right">
                                        <button className="uk-button uk-button-default uk-button-small">РЕДАКТИРОВАТЬ</button>
                                        <button className="uk-button uk-button-default uk-button-small">УДАЛИТЬ</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-secondary uk-card-hover uk-light">
                                    <div className="uk-card-body">
                                        <input className="uk-input uk-form-large" placeholder="Продукты" type="text" />
                                    </div>
                                    <div className="uk-card-footer uk-text-right">
                                        <button className="uk-button uk-button-default uk-button-small">РЕДАКТИРОВАТЬ</button>
                                        <button className="uk-button uk-button-default uk-button-small">УДАЛИТЬ</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="uk-modal-footer uk-text-right">
                        <button className="uk-button uk-button-default uk-modal-close">ЗАКРЫТЬ</button>
                    </div>
                </div>
            </div>
        </>
    );
};
