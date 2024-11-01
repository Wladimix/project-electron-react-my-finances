import GeneralYearlyStatistics from "@renderer/components/Statistics/GeneralYearlyStatistics.jsx";
import React from "react";
import TransactionService from "@renderer/services/TransactionService.js";

import { NOT_DEFINE } from "@renderer/RendererConstants.js";
import { selectYear, selectMonth } from "@renderer/storage/selectedDateSlice.js";
import { useDispatch, useSelector } from "react-redux";

export default function YearlyResultsCard() {
    const dispatch = useDispatch();
    const transactionService = new TransactionService(dispatch);

    const dates = useSelector(state => state.data.dates);
    const selectedYear = useSelector(state => state.selectedDate.year);

    const years = Object.keys(dates).reverse();

    const changeYearEvent = e => {
        transactionService.loadTransactions({ year: e.target.value });
        dispatch(selectYear(e.target.value));
        dispatch(selectMonth(NOT_DEFINE));
    };

    return (
        <div className="uk-card uk-card-default uk-card-body uk-background-muted">
            <table className="uk-table uk-table-small">
                <tbody>
                    <tr>
                        <td><h1>Год</h1></td>
                        <td className="uk-text-right uk-width-small">
                            <select
                                className="uk-select uk-text-large"
                                onChange={changeYearEvent}
                                defaultValue={selectedYear}
                            >
                                <option>{NOT_DEFINE}</option>
                                {
                                    years.map(year => (
                                        <option key={year}>{year}</option>
                                    ))
                                }
                            </select>
                        </td>
                    </tr>
                    {
                        selectedYear !== NOT_DEFINE
                        ? <GeneralYearlyStatistics />
                        : ""
                    }
                </tbody>
            </table>
        </div>
    );
};
