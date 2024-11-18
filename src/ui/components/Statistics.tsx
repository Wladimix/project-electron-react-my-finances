import CalculationService from "../services/CalculationService";
import MonthlyStatisticCard from "./Cards/MonthlyStatisticCard";
import YearlyStatisticCard from "./Cards/YearlyStatisticCard";

import { Bar } from "react-chartjs-2";
import { useAppSelector } from "../storage/store";
import { useEffect, useState } from "react";

export default function Statistics() {
    const transactions = useAppSelector(state => state.data.transactions);

    const [comparativeStatistics, setComparativeStatistics] = useState<{ [key: keyof GetDatesDTO]: TotalStatisticsDTO }>({});

    useEffect(() => {
        CalculationService.getComparativeStatistics(setComparativeStatistics);
    }, [transactions]);

    return (
        <>
            <h1 id="statistics" className="uk-heading-line uk-width-expand">
                <span>
                    <button
                        className="uk-button uk-button-primary uk-margin-right"
                        uk-toggle="target: #category-management"
                    >
                        УПРАВЛЕНИЕ КАТЕГОРИЯМИ
                    </button>
                    Статистика расходов
                </span>
            </h1>

            <div data-uk-grid>
                <div className="uk-width-1-2">
                    <YearlyStatisticCard />
                </div>
                <div className="uk-width-1-2">
                    <MonthlyStatisticCard />
                </div>
            </div>

            <div className="uk-card uk-card-default uk-card-body uk-margin">
                <h2 className="uk-card-title">Общая статистика по годам (₽)</h2>
                <Bar data={{
                    labels: Object.keys(comparativeStatistics),
                    datasets: [
                        {
                            data: Object.keys(comparativeStatistics).map(year =>
                                Number(comparativeStatistics[year].totalIncomeAmount.replace(/[\s₽]+/g, ""))
                            ),
                            label: "Доходы",
                            backgroundColor: "rgba(50, 200, 100, 0.5)"
                        },
                        {
                            data: Object.keys(comparativeStatistics).map(year =>
                                Number(comparativeStatistics[year].totalExpenceAmount.replace(/[\s₽]+/g, ""))
                            ),
                            label: "Расходы",
                            backgroundColor: "rgba(200, 50, 50, 0.5)"
                        }
                    ]
                }}/>
            </div>
        </>
    );
};
