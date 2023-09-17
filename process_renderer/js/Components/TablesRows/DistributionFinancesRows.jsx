import React from "react";
import { useStore } from "effector-react";

import AnimatedFormControl from "../TablesCellsContent/AnimatedFormControl.jsx";
import AnimatedActionButtons from "../TablesCellsContent/AnimatedActionButtons.jsx";

import DataFromDatabaseStorage from "../../Storages/DataFromDatabaseStorage.js";
import ComponentsAnimationStorage from "../../Storages/ComponentsAnimationStorage.js";
import Animation from "../../SupportFunctions/Animation.js";

export default function DistributionFinancesRows() {
    const dataForDistributionFinancesTable = useStore(DataFromDatabaseStorage.$dataForDistributionFinancesTable);
    
    const rowEditingMode = useStore(ComponentsAnimationStorage.$rowEditingMode);
    const selectedRow = useStore(ComponentsAnimationStorage.$selectedRow);
    const cellsOverflowIsHidden = useStore(ComponentsAnimationStorage.$cellsOverflowIsHidden);
    const defaultCellValueIsHidden = useStore(ComponentsAnimationStorage.$defaultCellValueIsHidden);
    const alterCellValueIsNotHidden = useStore(ComponentsAnimationStorage.$alterCellValueIsNotHidden);

    return <>{
        dataForDistributionFinancesTable.map((elem) => {
            let classesNamesForRow = Animation.makeClassesNamesForRow(
                elem.id + '-distribution-finances',
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
                        placeholder='Тип распределения финансов'
                        classesNames={ classesNamesForRow }
                    />
                </td>
                <td className={ classesNamesForRow.cellClassName }>
                    сумма
                </td>
                <td className={ classesNamesForRow.cellClassName }>
                    <AnimatedActionButtons
                        index={ elem.id + '-distribution-finances' }
                        classesNames={ classesNamesForRow }
                    />
                </td>
            </tr>
        })
    }</>;
}
