import CalculationService from "@renderer/services/CalculationService.js";
import React, { useEffect, useState } from "react";
import Services from "@renderer/services/Services.js";

import { useSelector } from "react-redux";

export default function GeneralStatistics({ date }) {
    const transactions = useSelector(state => state.data.transactions);
    const [totalStatistics, setTotalStatistics] = useState({});

    useEffect(() => {
        CalculationService.getTotalAmount(setTotalStatistics, date);
    }, [transactions]);

    const makeSavingsClasses = savingsValue => {
        if (savingsValue && new Services().convertAmountToNumber(savingsValue) > 0) {
            return "uk-text-large uk-text-success";
        } else if (savingsValue && new Services().convertAmountToNumber(savingsValue) < 0) {
            return "uk-text-large uk-text-danger";
        } else {
            return "uk-text-large";
        };
    };

    return (
        <>
            <tr>
                <td className="uk-text-large">Доходы</td>
                <td className="uk-text-large uk-text-right">{totalStatistics.totalIncomeAmount}</td>
            </tr>
            <tr>
                <td className="uk-text-large">Расходы</td>
                <td className="uk-text-large uk-text-right">{totalStatistics.totalExpenceAmount}</td>
            </tr>
            <tr>
                <td className={makeSavingsClasses(totalStatistics.savings)}>Экономия</td>
                <td className={makeSavingsClasses(totalStatistics.savings) + " uk-text-right"}>{totalStatistics.savings}</td>
            </tr>
        </>
    );
};
