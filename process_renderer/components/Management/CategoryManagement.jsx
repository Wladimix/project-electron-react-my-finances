import CategoryCard from "@renderer/components/Cards/CategoryCard.jsx";
import React from "react";

export default function CategoryManagement() {
    return (
        <>
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
        </>
    );
};
