import React from "react";
import { useStore } from "effector-react";
import Form from "react-bootstrap/Form";

import ComponentsAnimationStorage from "../../Storages/ComponentsAnimationStorage.js";

export default function AnimatedFormControl({ divValue, classesNames }) {
    const rowEditingMode = useStore(ComponentsAnimationStorage.$rowEditingMode);

    return <>
        <div className={ rowEditingMode.isDelete ? 'default-cell-value d-flex justify-content-around' : classesNames.defaultClassName }>
            <div>{ divValue }</div>
        </div>
        <Form className={rowEditingMode.isDelete ? 'animation-cell-value d-flex justify-content-around' : classesNames.animationClassName }>
            <Form.Control
                type='text'
                placeholder='Тип распределения финансов'
            />
        </Form >
    </>;
}
