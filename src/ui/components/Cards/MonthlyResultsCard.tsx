import GeneralStatistics from "../Statistics/GeneralStatistics";

export default function MonthlyResultsCard() {
    return (
        <div className="uk-card uk-card-default uk-card-body uk-background-muted">
            <table className="uk-table uk-table-small">
                <tbody>
                    <tr>
                        <td><h1>Месяц</h1></td>
                        <td className="uk-text-right uk-width-small">
                            <select
                                className="uk-select uk-text-large"
                                onChange={() => {}}
                                defaultValue={""}
                            >
                                <option>{"NOT_DEFINE"}</option>
                                {
                                    ['test'].map(month => (
                                        <option key={month}>{month}</option>
                                    ))
                                }
                            </select>
                        </td>
                    </tr>
                    <GeneralStatistics />
                </tbody>
            </table>
        </div>
    );
};
