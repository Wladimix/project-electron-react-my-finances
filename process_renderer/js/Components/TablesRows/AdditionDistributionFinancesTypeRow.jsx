import React from "react";
import { useStore } from "effector-react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import DistributionFinancesController from "../../0_Controllers/DistributionFinancesController.js";
import ComponentsAnimationStorage from "../../Storages/ComponentsAnimationStorage.js";
import DownloadProcessStorage from "../../Storages/DownloadProcessStorage.js";
import InputsValuesStorage from "../../Storages/InputsValuesStorage.js";
import EditingInputsValues from "../../SupportFunctions/EditingInputsValues.js";

export default function AdditionDistributionFinancesTypeRow() {
    const addedDistributionFinancesType = useStore(InputsValuesStorage.$addedDistributionFinancesType);
    const isLoadingDistributionFinancesAfterAdding = useStore(DownloadProcessStorage.$isLoadingDistributionFinancesAfterAdding);
    const isLoadingDistributionFinancesAfterEditing = useStore(DownloadProcessStorage.$isLoadingDistributionFinancesAfterEditing);
    const cellsOverflowIsHidden = useStore(ComponentsAnimationStorage.$cellsOverflowIsHidden);
    const rowEditingMode = useStore(ComponentsAnimationStorage.$rowEditingMode);

    return <tr className='table-row'>
        <td className='table-cell' colSpan={2}>
            <Form.Control
                disabled={
                    rowEditingMode.editingMode ||
                    cellsOverflowIsHidden
                }
                placeholder='Новый тип'
                value={ addedDistributionFinancesType }
                onChange={ e => EditingInputsValues.changeAddedDistributionFinancesType(e) }
            />
        </td>
        <td className='table-cell'>
            <Button
                disabled={
                    isLoadingDistributionFinancesAfterAdding ||
                    isLoadingDistributionFinancesAfterEditing ||
                    rowEditingMode.editingMode ||
                    cellsOverflowIsHidden
                }
                variant='success'
                onClick={ e => DistributionFinancesController.addAndLoadDistributionFinancesType(addedDistributionFinancesType) }
            >
                Добавить
            </Button>
        </td>
    </tr>;
}
