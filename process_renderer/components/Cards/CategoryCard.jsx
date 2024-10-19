import CategoryService from "@renderer/services/CategoryService.js";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

export default function CategoryCard({ categoriyType }) {
    const [name, setName] = useState("");

    const changeName = e => { setName(e.target.value) };

    const dispatch = useDispatch();
    const categoryService = new CategoryService(dispatch);

    const categoryLoader = useSelector(state => state.loaders.editingSpendingCategoryLoader);

    const editCategoryEvent = () => {
        const categoryName = name ? name : categoriyType.name;
        categoryService.editCategory(categoriyType.id, categoryName);
        setName("");
    };

    const deleteCategoryEvent = () => {
        categoryService.deleteCategory(categoriyType.id);
    };

    return (
        <>
            {
                categoryLoader === categoriyType.id
                    ?   <div className="uk-text-center">
                            <div data-uk-spinner="ratio: 8" />
                        </div>

                    :   <div>
                            <div className="uk-card uk-card-secondary uk-card-hover uk-light">
                                <div className="uk-card-body">
                                    <input
                                        className="uk-input uk-form-large"
                                        onChange={changeName}
                                        placeholder={categoriyType.name}
                                        type="text"
                                        value={name}
                                    />
                                </div>
                                <div className="uk-card-footer uk-text-right">
                                    <button
                                        className="uk-button uk-button-default uk-button-small"
                                        onClick={editCategoryEvent}
                                    >
                                        РЕДАКТИРОВАТЬ
                                    </button>
                                    <button
                                        className="uk-button uk-button-default uk-button-small"
                                        onClick={deleteCategoryEvent}
                                    >
                                        УДАЛИТЬ
                                    </button>
                                </div>
                            </div>
                        </div>
            }
        </>
    );
};
