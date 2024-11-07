import DistributionCard from "../Cards/DistributionCard";

export default function DistributionManagement() {
    return (
        <>
            <h3 className="uk-heading-line uk-width-expand">
                <span>Распределение финансов</span>
            </h3>

            <div className="uk-child-width-1-3@s uk-grid-match" data-uk-grid>

                {
                    ['test'].map(distributionType => (
                        <DistributionCard key={distributionType[0]} />
                    ))
                }

                <div>
                    <div className="uk-card uk-card-default uk-card-hover">
                        <div className="uk-card-body">
                            <input
                                className="uk-input uk-margin"
                                onChange={() => {}}
                                type="text"
                                value={""}
                            />
                            <input
                                className="uk-input uk-form-large"
                                onChange={() => {}}
                                type="text"
                                value={""}
                            />
                        </div>
                        <div className="uk-card-footer uk-text-right">
                            <button
                                className="uk-button uk-button-default uk-button-primary uk-button-small"
                                disabled={false}
                                onClick={() => {}}
                            >
                                ДОБАВИТЬ
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};
