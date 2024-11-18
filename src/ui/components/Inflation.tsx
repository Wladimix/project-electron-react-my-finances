import CalculationService from "../services/CalculationService";
import monthsDictionary from "../lib/monthsDictionary";

import { Line } from "react-chartjs-2";
import { NOT_DEFINE } from "../constants";
import { useAppSelector } from "../storage/store";
import { useEffect, useState } from "react";

export default function Inflation() {
    const selectedYear = useAppSelector(state => state.date.selectedYear);

    const [inflation, setInflation] = useState<InflationDTO>({
        year: 0,
        data: {
            "продукт": {
                "месяц": 0
            }
        }
    });

    useEffect(() => {
        CalculationService.getInflationData(setInflation, Number(selectedYear));
    }, [selectedYear]);

    return (
        <>
            {
                selectedYear !== NOT_DEFINE &&
                <div className="uk-card uk-card-default uk-card-body uk-margin uk-background-muted">
                    <div className="uk-card-badge uk-label">{"ГОДОВАЯ ИНФЛЯЦИЯ - " + inflation.year + " %"}</div>
                    <h2 className="uk-card-title">Инфляция за {selectedYear} год (%)</h2>
                    <Line data={{
                        labels: monthsDictionary,
                        datasets: Object.keys(inflation.data).map(product =>
                            ({ label: product, data: Object.values(inflation.data[product]) })
                        )
                    }}/>
                </div>
            }
        </>
    );
};
