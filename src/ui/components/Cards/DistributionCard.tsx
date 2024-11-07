export default function DistributionCard() {
    return (
        <div>
            <div className="uk-card uk-card-default uk-card-hover">
                <div className="uk-card-body">
                    <input
                        className="uk-input uk-margin"
                        onChange={() => {}}
                        placeholder={""}
                        type="text"
                        value={""}
                    />
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
                        disabled={false}
                        onClick={() => {}}
                    >
                        РЕДАКТИРОВАТЬ
                    </button>
                    <button
                        className="uk-button uk-button-default uk-button-small"
                        disabled={false}
                        onClick={() => {}}
                    >
                        УДАЛИТЬ
                    </button>
                </div>
            </div>
        </div>
    );
};
