import React from "react";

import { useStore } from "effector-react";

import FormControl from "../TablesCellsContent/FormControl.jsx";
import Button from "../TablesCellsContent/Button.jsx";

import DistributionFinancesController from "../../Controllers/DistributionFinancesController.js";
import EditingInputsValues from "../../SupportFunctions/EditingInputsValues.js";
import InputsValuesStorage from "../../Storages/InputsValuesStorage.js";

export default function AdditionDistributionFinancesTypeRow() {
    const distributionFinancesType = useStore(InputsValuesStorage.$distributionFinancesType);

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
                variant='success'
                textButton='Добавить тип'
                onClick={ e => DistributionFinancesController.addAndLoadDistributionFinancesType(distributionFinancesType) }
            />
        </td>
    </tr>;
}
