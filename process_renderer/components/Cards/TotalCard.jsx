import FinanceService from "@renderer/services/FinanceService";
import React from "react";

import { useSelector } from "react-redux";

export default function TotalResult() {
    const distributionTypes = useSelector(state => state.data.distributionFinancesTypes);

    const financeService = new FinanceService();
    const capital = financeService.calculateCapital(distributionTypes);

    return (
        <div className="uk-card uk-card-default uk-card-body uk-margin">
            <table className="uk-table uk-table-small">
                <tbody>
                    <tr>
                        <td><h1 className="uk-text-bold uk-text-primary">Всего в наличии</h1></td>
                        <td><h1 className="uk-text-primary uk-text-right">{capital}</h1></td>
                    </tr>
                    <tr>
                        <td><h2 className="uk-text-bold">Годовая инфляция</h2></td>
                        <td><h2 className="uk-text-right">5%</h2></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
