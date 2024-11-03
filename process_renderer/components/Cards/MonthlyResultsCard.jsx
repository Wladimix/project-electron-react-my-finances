import GeneralStatistics from "@renderer/components/Statistics/GeneralStatistics.jsx";
import React from "react";
import TransactionService from "@renderer/services/TransactionService.js";

import { NOT_DEFINE } from "@renderer/RendererConstants.js";
import { selectMonth } from "@renderer/storage/selectedDateSlice.js";
import { useDispatch, useSelector } from "react-redux";

export default function MonthlyResultsCard() {
    const dispatch = useDispatch();
    const transactionService = new TransactionService(dispatch);

    const dates = useSelector(state => state.data.dates);
    const selectedYear = useSelector(state => state.selectedDate.year);
    const selectedMonth = useSelector(state => state.selectedDate.month);

    const months = dates[selectedYear] ? [ ...dates[selectedYear] ].reverse() : [];

    const changeMonthEvent = e => {
        transactionService.loadTransactions({ year: selectedYear, month: e.target.value });
        dispatch(selectMonth(e.target.value));
    };

    return (
        <div className="uk-card uk-card-default uk-card-body uk-background-muted">
            <table className="uk-table uk-table-small">
                <tbody>
                    <tr>
                        <td><h1>Месяц</h1></td>
                        <td className="uk-text-right uk-width-small">
                            <select
                                className="uk-select uk-text-large"
                                onChange={changeMonthEvent}
                                defaultValue={selectedMonth}
                            >
                                <option>{NOT_DEFINE}</option>
                                {
                                    months.map(month => (
                                        <option key={month}>{month}</option>
                                    ))
                                }
                            </select>
                        </td>
                    </tr>
                    {
                        selectedMonth !== NOT_DEFINE
                        ? <GeneralStatistics date={{ year: selectedYear, month: selectedMonth }} />
                        : ""
                    }
                </tbody>
            </table>
        </div>
    );
};
