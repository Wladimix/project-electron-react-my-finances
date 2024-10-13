import CategoryManagement from "@renderer/components/Management/CategoryManagement.jsx";
import DistributionManagement from "@renderer/components/Management/DistributionManagement.jsx";
import React from "react";

export default function DistributionAndCategoryModal() {
    return (
        <div id="category-management" className="uk-modal-container" data-uk-modal>
            <div className="uk-modal-dialog">

                <div className="uk-modal-header">
                    <h2 className="uk-modal-title">Управление категориями</h2>
                </div>

                <div className="uk-modal-body">
                    <DistributionManagement />
                    <CategoryManagement />
                </div>

                <div className="uk-modal-footer uk-text-right">
                    <button className="uk-button uk-button-default uk-modal-close">ЗАКРЫТЬ</button>
                </div>

            </div>
        </div>
    );
};
