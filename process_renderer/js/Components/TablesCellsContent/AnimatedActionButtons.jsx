import React from "react";
import { useStore } from "effector-react";
import Button from "react-bootstrap/Button";

import checkCircle from "../icons/check-circle.jsx";
import pencilSquare from "../icons/pencil-square.jsx";
import trash from "../icons/trash.jsx";
import xCircle from "../icons/x-circle.jsx";

import ComponentsAnimationStorage from "../../Storages/ComponentsAnimationStorage.js";
import DownloadProcessStorage from "../../Storages/DownloadProcessStorage.js";
import Animation from "../../SupportFunctions/Animation.js";

export default function AnimatedActionButtons({ index, changeInputValueStorageFunction, editFunction, deleteFunction, classesNames }) {
    const rowEditingMode = useStore(ComponentsAnimationStorage.$rowEditingMode);
    const cellsOverflowIsHidden = useStore(ComponentsAnimationStorage.$cellsOverflowIsHidden);
    const isLoadingDistributionFinancesAfterEditing = useStore(DownloadProcessStorage.$isLoadingDistributionFinancesAfterEditing);
    
    return <>
        <div className={ classesNames.defaultClassName }>
            <Button
                variant='warning'
                disabled={
                    isLoadingDistributionFinancesAfterEditing ||
                    rowEditingMode.editingMode ||
                    cellsOverflowIsHidden
                }
                onClick={ () => {
                    changeInputValueStorageFunction();
                    Animation.changeRowEditingMode(index, rowEditingMode.editingMode, false);
                }}
            >
                { pencilSquare }
            </Button>
            <Button
                variant='danger'
                disabled={
                    isLoadingDistributionFinancesAfterEditing ||
                    rowEditingMode.editingMode ||
                    cellsOverflowIsHidden
                }
                onClick={() => Animation.changeRowEditingMode(index, rowEditingMode.editingMode, true)}
            >
                { trash }
            </Button>
        </div>
        <div className={ classesNames.animationClassName }>
            <Button
                variant='danger'
                disabled={ cellsOverflowIsHidden }
                onClick={() => Animation.changeRowEditingMode(index, rowEditingMode.editingMode)}
            >
                { xCircle }
            </Button>
            <Button
                variant='success'
                disabled={ cellsOverflowIsHidden }
                onClick={ () => {
                    if (rowEditingMode.isDelete) deleteFunction()
                    else editFunction();
                    Animation.changeRowEditingMode(index, rowEditingMode.editingMode);
                }}
            >
                { checkCircle }
            </Button>
        </div >
    </>;
}
