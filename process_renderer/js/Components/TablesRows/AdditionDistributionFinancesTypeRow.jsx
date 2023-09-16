import React from "react";
import { useStore } from "effector-react";

import FormControl from "../TablesCellsContent/FormControl.jsx";
import CustomButton from "../TablesCellsContent/CustomButton.jsx";

import DistributionFinancesController from "../../Controllers/DistributionFinancesController.js";
import EditingInputsValues from "../../SupportFunctions/EditingInputsValues.js";
import InputsValuesStorage from "../../Storages/InputsValuesStorage.js";
import DownloadProcessStorage from "../../Storages/DownloadProcessStorage.js";
import ComponentsAnimationStorage from "../../Storages/ComponentsAnimationStorage.js";

export default function AdditionDistributionFinancesTypeRow() {
    const distributionFinancesType = useStore(InputsValuesStorage.$distributionFinancesType);
    const isLoadingDistributionFinances = useStore(DownloadProcessStorage.$isLoadingDistributionFinances);
    const rowEditingMode = useStore(ComponentsAnimationStorage.$rowEditingMode);

    return <tr className='table-row'>
        <td className='table-cell' colSpan={2}>
            <FormControl
                placeholder='Новый тип'
                value={ distributionFinancesType }
                onChange={ e => EditingInputsValues.changeDistributionFinancesType(e) }
            />
        </td>
        <td className='table-cell'>
            <CustomButton
                disabled={ isLoadingDistributionFinances || rowEditingMode.editingMode }
                variant='success'
                textButton='Добавить'
                onClick={ e => DistributionFinancesController.addAndLoadDistributionFinancesType(distributionFinancesType) }
            />
        </td>
    </tr>;
}
