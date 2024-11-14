import GeneralStatistics from "../Statistics/GeneralStatistics";
import TransactionService from "../../services/Transaction/TransactionService";

import { NOT_DEFINE } from "../../constants";
import { selectMonth, selectYear } from "../../storage/dateSlice";
import { useAppDispatch, useAppSelector } from "../../storage/store";

export default function YearlyResultsCard() {
    const date = useAppSelector(state => state.date);
    const requiredNote = useAppSelector(state => state.transaction.requiredNote);

    const dispatch = useAppDispatch();
    const transactionService = new TransactionService(dispatch);

    const years = Object.keys(date.dates).reverse();

    const changeYearEvent = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        transactionService.loadTransactions({ year: e.target.value, month: NOT_DEFINE, note: requiredNote });
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
                                defaultValue={date.selectedYear}
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
                        date.selectedYear !== NOT_DEFINE
                        ? <GeneralStatistics date={{ selectedYear: date.selectedYear, selectedMonth: NOT_DEFINE }} />
                        : ""
                    }
                </tbody>
            </table>
        </div>
    );
};
