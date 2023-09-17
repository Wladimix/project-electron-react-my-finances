import React from "react";
import { useStore } from "effector-react";

import AnimatedFormControl from "../TablesCellsContent/AnimatedFormControl.jsx";
import AnimatedActionButtons from "../TablesCellsContent/AnimatedActionButtons.jsx";

import DataFromDatabaseStorage from "../../Storages/DataFromDatabaseStorage.js";
import ComponentsAnimationStorage from "../../Storages/ComponentsAnimationStorage.js";
import Animation from "../../SupportFunctions/Animation.js";

export default function ExpensesCategoriesRows() {
    const dataForExpensesCategoriesTable = useStore(DataFromDatabaseStorage.$dataForExpensesCategoriesTable);

    const rowEditingMode = useStore(ComponentsAnimationStorage.$rowEditingMode);
    const selectedRow = useStore(ComponentsAnimationStorage.$selectedRow);
    const cellsOverflowIsHidden = useStore(ComponentsAnimationStorage.$cellsOverflowIsHidden);
    const defaultCellValueIsHidden = useStore(ComponentsAnimationStorage.$defaultCellValueIsHidden);
    const alterCellValueIsNotHidden = useStore(ComponentsAnimationStorage.$alterCellValueIsNotHidden);

    return <>{
        dataForExpensesCategoriesTable.map((elem) => {
            let classesNamesForRow = Animation.makeClassesNamesForRow(
                elem.id + '-expenses-categories',
                {
                    rowEditingMode: rowEditingMode,
                    selectedRow: selectedRow,
                    cellsOverflowIsHidden: cellsOverflowIsHidden,
                    defaultCellValueIsHidden: defaultCellValueIsHidden,
                    alterCellValueIsNotHidden: alterCellValueIsNotHidden
                }
            );

            return <tr className='table-row' key={ elem.id }>
                <td className={ classesNamesForRow.cellClassName }>
                    <AnimatedFormControl
                        divValue={ elem.name }
                        placeholder='Категория расходов'
                        classesNames={ classesNamesForRow }
                    />
                </td>
                <td className={ classesNamesForRow.cellClassName }>
                    сумма
                </td>
                <td className={ classesNamesForRow.cellClassName }>
                    <AnimatedActionButtons
                        index={ elem.id + '-expenses-categories' }
                        classesNames={ classesNamesForRow }
                    />
                </td>
            </tr>
        })
    }</>;
}
