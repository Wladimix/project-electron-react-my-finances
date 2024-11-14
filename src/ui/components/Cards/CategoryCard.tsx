import SpendingCategoryService from "../../services/SpendingCategoryService";

import { useAppDispatch, useAppSelector } from "../../storage/store";
import { useState } from "react";

type CategoryCardProps = {
    spendingCategory: GetCategoryDTO
};

export default function CategoryCard({ spendingCategory }: CategoryCardProps) {
    const date = useAppSelector(state => state.date);
    const requiredNote = useAppSelector(state => state.transaction.requiredNote);

    const [name, setName] = useState<string>("");

    const changeNameEvent = (e: React.ChangeEvent<HTMLInputElement>): void => { setName(e.target.value) };

    const dispatch = useAppDispatch();
    const spendingCategoryService = new SpendingCategoryService(dispatch);

    const editSpendingCategoryEvent = (): void => {
        const spendingCategoryName = name ? name : spendingCategory.name;

        spendingCategoryService.editSpendingCategory(
            spendingCategory.id,
            spendingCategoryName,
            { year: date.selectedYear, month: date.selectedMonth, note: requiredNote }
        );

        setName("");
    };

    const deleteSpendingCategoryEvent = (): void => {
        spendingCategoryService.deleteSpendingCategory(
            spendingCategory.id,
            spendingCategory.name,
            { year: date.selectedYear, month: date.selectedMonth, note: requiredNote }
        );
    };

    return (
        <div>
            <div className="uk-card uk-card-secondary uk-card-hover uk-light">
                <div className="uk-card-body">
                    <input
                        className="uk-input uk-form-large"
                        onChange={changeNameEvent}
                        placeholder={spendingCategory.name}
                        spellCheck="false"
                        type="text"
                        value={name}
                    />
                </div>
                <div className="uk-card-footer uk-text-right">
                    <button
                        className="uk-button uk-button-default uk-button-small"
                        disabled={!spendingCategoryService.checkSpendingCategory(name)}
                        onClick={editSpendingCategoryEvent}

                    >
                        РЕДАКТИРОВАТЬ
                    </button>
                    <button
                        className="uk-button uk-button-default uk-button-small"
                        onClick={deleteSpendingCategoryEvent}
                    >
                        УДАЛИТЬ
                    </button>
                </div>
            </div>
        </div>
    );
};
