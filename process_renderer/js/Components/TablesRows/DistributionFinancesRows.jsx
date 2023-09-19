import React from "react";
import { useStore } from "effector-react";

import AnimatedActionButtons from "../TablesCellsContent/AnimatedActionButtons.jsx";
import AnimatedFormControl from "../TablesCellsContent/AnimatedFormControl.jsx";

import DistributionFinancesController from "../../0_Controllers/DistributionFinancesController.js";
import ComponentsAnimationStorage from "../../Storages/ComponentsAnimationStorage.js";
import DataFromDatabaseStorage from "../../Storages/DataFromDatabaseStorage.js";
import DownloadProcessStorage from "../../Storages/DownloadProcessStorage.js";
import InputsValuesStorage from "../../Storages/InputsValuesStorage.js";
import Animation from "../../SupportFunctions/Animation.js";
import EditingInputsValues from "../../SupportFunctions/EditingInputsValues.js";

import { DISTRIBUTION_FINANCES_EXTRA_ID } from "../../RendererConstants.js";

export default function DistributionFinancesRows() {
    const dataForDistributionFinancesTable = useStore(DataFromDatabaseStorage.$dataForDistributionFinancesTable);
    const editableDistributionFinancesType = useStore(InputsValuesStorage.$editableDistributionFinancesType);
    const isLoadingDistributionFinancesAfterEditing = useStore(DownloadProcessStorage.$isLoadingDistributionFinancesAfterEditing);
    
    const rowEditingMode = useStore(ComponentsAnimationStorage.$rowEditingMode);
    const selectedRow = useStore(ComponentsAnimationStorage.$selectedRow);
    const cellsOverflowIsHidden = useStore(ComponentsAnimationStorage.$cellsOverflowIsHidden);
    const defaultCellValueIsHidden = useStore(ComponentsAnimationStorage.$defaultCellValueIsHidden);
    const alterCellValueIsNotHidden = useStore(ComponentsAnimationStorage.$alterCellValueIsNotHidden);

    return <>{
        dataForDistributionFinancesTable.map((elem) => {
            let classesNamesForRow = Animation.makeClassesNamesForRow(
                elem.id + DISTRIBUTION_FINANCES_EXTRA_ID,
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
                        classesNames={ classesNamesForRow }
                        placeholder='Тип распределения финансов'
                        divValue={ isLoadingDistributionFinancesAfterEditing ? 'загрузка' : elem.name }
                        formControlValue={ editableDistributionFinancesType }
                        onChange={ e => EditingInputsValues.changeEditableDistributionFinancesType(e) }
                    />
                </td>
                <td className={ classesNamesForRow.cellClassName }>
                    сумма
                </td>
                <td className={ classesNamesForRow.cellClassName }>
                    <AnimatedActionButtons
                        classesNames={ classesNamesForRow }
                        index={ elem.id + DISTRIBUTION_FINANCES_EXTRA_ID }
                        typeOrCategoryName={ elem.name }
                        changeInputValueStorageFunction={ () => InputsValuesStorage.changeEditableDistributionFinancesType(elem.name) }
                        editFunction={ () => DistributionFinancesController.editAndLoadDistributionFinancesType(editableDistributionFinancesType, elem.name) }

                    />
                </td>
            </tr>
        })
    }</>;
}
