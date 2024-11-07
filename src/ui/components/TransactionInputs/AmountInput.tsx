export default function AmountInput() {
    return (
        <div className="uk-margin">
            <label className="uk-form-label" htmlFor="price">Сумма / Цена</label>
            <div className="uk-form-controls">
                <input
                    className="uk-input"
                    id="price"
                    onChange={() => {}}
                    type="text"
                    value={""}
                />
            </div>
        </div>
    );
};
