import CategoryCard from "@renderer/components/Cards/CategoryCard.jsx";
import CategoryService from "@renderer/services/CategoryService.js";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

export default function CategoryManagement() {
    const [name, setName] = useState("");

    const changeName = e => { setName(e.target.value) };

    const dispatch = useDispatch();
    const categoryService = new CategoryService(dispatch);

    const categoriesTypes = useSelector(state => state.data.spendingCategories);
    const categoryLoader = useSelector(state => state.loaders.addingSpendingCategoryLoader);

    const addCategoryEvent = () => {
        categoryService.addCategory(name);
        setName("");
    };

    return (
        <>
            <h3 className="uk-heading-line uk-width-expand">
                <span>Категории расходов</span>
            </h3>

            <div className="uk-child-width-1-3@s uk-grid-match" data-uk-grid>

                {
                    categoriesTypes.map(categoriyType => (
                        <CategoryCard key={categoriyType.id} categoriyType={categoriyType} />
                    ))
                }

                {
                    categoryLoader
                        ?   <div className="uk-text-center">
                                <div data-uk-spinner="ratio: 6" />
                            </div>

                        :   <div>
                                <div className="uk-card uk-card-default uk-card-hover">
                                    <div className="uk-card-body">
                                        <input
                                            className="uk-input uk-form-large"
                                            onChange={changeName}
                                            type="text"
                                            value={name}
                                        />
                                    </div>
                                    <div className="uk-card-footer uk-text-right">
                                        <button
                                            className="uk-button uk-button-default uk-button-primary uk-button-small"
                                            disabled={!categoryService.checkCategory(name)}
                                            onClick={addCategoryEvent}
                                        >
                                            ДОБАВИТЬ
                                        </button>
                                    </div>
                                </div>
                            </div>
                }

            </div>
        </>
    );
};
