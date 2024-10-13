import React from "react";

export default function YearlyResultsCard() {
    return (
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
    );
};
