import React from "react";

import { useStore } from "effector-react";

import FormControl from "../TablesCellsContent/FormControl.jsx";
import Button from "../TablesCellsContent/Button.jsx";

import DistributionFinancesController from "../../Controllers/DistributionFinancesController.js";
import EditingInputsValues from "../../SupportFunctions/EditingInputsValues.js";
import InputsValuesStorage from "../../Storages/InputsValuesStorage.js";
import DownloadProcessStorage from "../../Storages/DownloadProcessStorage.js";

export default function AdditionDistributionFinancesTypeRow() {
    const distributionFinancesType = useStore(InputsValuesStorage.$distributionFinancesType);
    const isLoadingDistributionFinances = useStore(DownloadProcessStorage.$isLoadingDistributionFinances);

    return <tr className='table-row'>
        <td className='table-cell'>
            <FormControl
                placeholder='Новый тип'
                value={ distributionFinancesType }
                onChange={ e => EditingInputsValues.changeDistributionFinancesType(e) }
            />
        </td>
        <td className='table-cell'>
            <Button
                disabled={ isLoadingDistributionFinances }
                variant='success'
                textButton='Добавить тип'
                onClick={ e => DistributionFinancesController.addAndLoadDistributionFinancesType(distributionFinancesType) }
            />
        </td>
    </tr>;
}
