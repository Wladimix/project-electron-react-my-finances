import CalculationService from "@renderer/services/CalculationService.js";
import React, { useEffect, useState } from "react";

import { DELETED_PARAMS_REGULAR } from "@renderer/RendererConstants";
import { useSelector } from "react-redux";

export default function ExpenditureStatistics({ date }) {
    const transactions = useSelector(state => state.data.transactions);
    const [amountOfExpenses, setAmountOfExpenses] = useState([]);

    useEffect(() => {
        CalculationService.getStatisticsOnExpenses(setAmountOfExpenses, date);
    }, [transactions]);

    const makeTextClass = purchase =>
        DELETED_PARAMS_REGULAR.test(purchase)
            ? "uk-width-expand uk-text-large uk-text-danger"
            : "uk-width-expand uk-text-large";

    return (
        <>
            {
                amountOfExpenses.length
                    ?   amountOfExpenses.map(expenses => (
                            <div key={expenses.purchase} className="uk-grid-small" data-uk-grid>
                                <div className={makeTextClass(expenses.purchase)} data-uk-leader>
                                    {expenses.purchase.replace(DELETED_PARAMS_REGULAR, "")}
                                </div>
                                <div className="uk-text-large">{expenses.amount}</div>
                            </div>
                        ))
                    :   <div className="uk-alert-primary" data-uk-alert>
                            Недостаточно данных для расчёта статистики
                        </div>
            }
        </>
    );
};
