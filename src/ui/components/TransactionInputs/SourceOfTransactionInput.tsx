export default function SourceOfTransactionInput() {
    return (
        <div className="uk-margin">
            <label className="uk-form-label" htmlFor="source-of-transaction">Источник транзакции</label>
            <div className="uk-form-controls">
                <select
                    className="uk-select"
                    id="source-of-transaction"
                    onChange={() => {}}
                    value={""}
                >

                    <option value={1}>значение не выбрано</option>
                    {
                        ['test'].map(distributionType => (
                            <option
                                key={distributionType[0]}
                                value={""}
                            >
                                {'distributionType.name'}
                            </option>
                        ))
                    }

                </select>
            </div>
        </div>
    );
};
