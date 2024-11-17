import ExpenditureStatistics from "../Statistics/ExpenditureStatistics";
import monthsDictionary from "../../lib/monthsDictionary";

import { NOT_DEFINE } from "../../constants";
import { useAppSelector } from "../../storage/store";

export default function MonthlyStatisticCard() {
    const date = useAppSelector(state => state.date);

    return (
        <div className="uk-card uk-card-default uk-card-body uk-background-muted">
            {
                date.selectedMonth !== NOT_DEFINE
                    ?   <button className="uk-button uk-button-default uk-card-badge uk-label">ДИАГРАММА ЗА {monthsDictionary[Number(date.selectedMonth)]}</button>
                    :   <div className="uk-card-badge">МЕСЯЦ НЕ ВЫБРАН</div>
            }
            <h1 className="uk-heading-medium">
                {date.selectedMonth !== NOT_DEFINE ? monthsDictionary[Number(date.selectedMonth)] : <span data-uk-icon="icon: calendar; ratio: 3"></span>}
            </h1>
            {
                date.selectedMonth !== NOT_DEFINE
                    ?   <ExpenditureStatistics date={{ selectedYear: date.selectedYear, selectedMonth: date.selectedMonth }} />
                    :   <div className="uk-alert-primary" data-uk-alert>
                            месяц не выбран
                        </div>
            }
        </div>
    );
};
