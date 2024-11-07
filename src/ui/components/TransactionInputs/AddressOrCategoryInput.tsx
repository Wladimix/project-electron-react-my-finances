export default function AddressOrCategoryInput() {
    return (
        <div className="uk-margin">
            <label className="uk-form-label" htmlFor="address-or-category">Адрес / Категория</label>
            <div className="uk-form-controls">
                <select
                    className="uk-select"
                    id="address-or-category"
                    onChange={() => {}}
                    value={""}
                >

                    <option value={1}>значение не выбрано</option>
                    {
                        ["test"].map(distributionType => (
                            <option
                                className="uk-text-success"
                                key={distributionType[0]}
                                value={""}
                            >
                                {"distributionType.name"}
                            </option>
                        ))
                    }
                    {
                        ['test'].map(spendingCategory => (
                            <option
                                className="uk-text-danger"
                                key={spendingCategory[0]}
                                value={""}
                            >
                                {"spendingCategory.name"}
                            </option>
                        ))
                    }

                </select>
            </div>
        </div>
    );
};
