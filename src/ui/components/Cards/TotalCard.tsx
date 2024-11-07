export default function TotalCard() {
    return (
        <div className="uk-card uk-card-default uk-card-body uk-margin">
            <table className="uk-table uk-table-small">
                <tbody>
                    <tr>
                        <td><h1 className="uk-text-bold uk-text-primary">Всего в наличии</h1></td>
                        <td><h1 className="uk-text-primary uk-text-right">50 000</h1></td>
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
