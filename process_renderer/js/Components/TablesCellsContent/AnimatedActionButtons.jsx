import React from "react";
import { useStore } from "effector-react";
import Button from "react-bootstrap/Button";

import pencilSquare from "../icons/pencil-square.jsx";
import trash from "../icons/trash.jsx";
import xCircle from "../icons/x-circle.jsx";
import checkCircle from "../icons/check-circle.jsx";

import ComponentsAnimationStorage from "../../Storages/ComponentsAnimationStorage.js";
import Animation from "../../SupportFunctions/Animation.js";

export default function AnimatedActionButtons({ index, classesNames }) {
    const rowEditingMode = useStore(ComponentsAnimationStorage.$rowEditingMode);

    return <>
        <div className={ classesNames.defaultClassName }>
            <Button
                variant='warning'
                disabled={rowEditingMode.editingMode ? true : false}
                onClick={() => Animation.changeRowEditingMode(index, rowEditingMode.editingMode, false)}
            >
                { pencilSquare }
            </Button>
            <Button
                variant='danger'
                disabled={rowEditingMode.editingMode ? true : false}
                onClick={() => Animation.changeRowEditingMode(index, rowEditingMode.editingMode, true)}
            >
                { trash }
            </Button>
        </div>
        <div className={ classesNames.animationClassName }>
            <Button
                variant='danger'
                onClick={() => Animation.changeRowEditingMode(index, rowEditingMode.editingMode)}
            >
                { xCircle }
            </Button>
            <Button variant='success'>
                { checkCircle }
            </Button>
        </div >
    </>;
}
