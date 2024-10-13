import CategoryCard from "@renderer/components/Cards/CategoryCard.jsx";
import DistributionCard from "@renderer/components/Cards/DistributionCard.jsx";
import React from "react";

export default function CategoryManagementModal() {
    return (
        <div id="category-management" className="uk-modal-container" data-uk-modal>
            <div className="uk-modal-dialog">

                <div className="uk-modal-header">
                    <h2 className="uk-modal-title">Управление категориями</h2>
                </div>

                <div className="uk-modal-body">
                    <h3 className="uk-heading-line uk-width-expand">
                        <span>Распределение финансов</span>
                    </h3>

                    <div className="uk-child-width-1-3@s uk-grid-match" data-uk-grid>
                        <div>
                            <DistributionCard />
                        </div>
                        <div>
                            <DistributionCard />
                        </div>
                        <div>
                            <DistributionCard />
                        </div>
                        <div>
                            <DistributionCard />
                        </div>
                        <div>
                            <div className="uk-card uk-card-default uk-card-hover">
                                <div className="uk-card-body">
                                    <input className="uk-input uk-margin" type="text" />
                                    <input className="uk-input uk-form-large" type="text" />
                                </div>
                                <div className="uk-card-footer uk-text-right">
                                    <button className="uk-button uk-button-default uk-button-primary uk-button-small">ДОБАВИТЬ</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="uk-heading-line uk-width-expand">
                        <span>Категории расходов</span>
                    </h3>

                    <div className="uk-child-width-1-3@s uk-grid-match" data-uk-grid>
                        <div>
                            <CategoryCard />
                        </div>
                        <div>
                            <CategoryCard />
                        </div>
                        <div>
                            <CategoryCard />
                        </div>
                        <div>
                            <CategoryCard />
                        </div>
                        <div>
                            <div className="uk-card uk-card-secondary uk-card-hover uk-light">
                                <div className="uk-card-body">
                                    <input className="uk-input uk-form-large" type="text" />
                                </div>
                                <div className="uk-card-footer uk-text-right">
                                    <button className="uk-button uk-button-default uk-button-primary uk-button-small">ДОБАВИТЬ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="uk-modal-footer uk-text-right">
                    <button className="uk-button uk-button-default uk-modal-close">ЗАКРЫТЬ</button>
                </div>

            </div>
        </div>
    );
};
