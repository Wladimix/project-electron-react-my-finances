import React from "react";
import { useStore } from "effector-react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
            <Form.Control
                disabled={ rowEditingMode.editingMode }
                placeholder='Новый тип'
                value={ distributionFinancesType }
                onChange={ e => EditingInputsValues.changeDistributionFinancesType(e) }
            />
        </td>
        <td className='table-cell'>
            <Button
                disabled={ isLoadingDistributionFinances || rowEditingMode.editingMode }
                variant='success'
                onClick={ e => DistributionFinancesController.addAndLoadDistributionFinancesType(distributionFinancesType) }
            >
                Добавить
            </Button>
        </td>
    </tr>;
}
