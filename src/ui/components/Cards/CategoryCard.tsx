export default function CategoryCard() {
    return (
        <div>
            <div className="uk-card uk-card-secondary uk-card-hover uk-light">
                <div className="uk-card-body">
                    <input
                        className="uk-input uk-form-large"
                        onChange={() => {}}
                        placeholder={""}
                        type="text"
                        value={""}
                    />
                </div>
                <div className="uk-card-footer uk-text-right">
                    <button
                        className="uk-button uk-button-default uk-button-small"
                        onClick={() => {}}
                    >
                        РЕДАКТИРОВАТЬ
                    </button>
                    <button
                        className="uk-button uk-button-default uk-button-small"
                        onClick={() => {}}
                    >
                        УДАЛИТЬ
                    </button>
                </div>
            </div>
        </div>
    );
};
