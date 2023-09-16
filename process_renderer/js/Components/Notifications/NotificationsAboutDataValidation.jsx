import React from "react";
import { useStore } from "effector-react";
import Toast from "react-bootstrap/Toast";

import ToastsStorage from "../../Storages/ToastsStorage.js";
import EditingToastsValues from "../../SupportFunctions/EditingToastsValues.js";

export default function NotificationsAboutDataValidation() {
    const displayingNotification = useStore(ToastsStorage.$displayingNotification);
    const notificationText = useStore(ToastsStorage.$notificationText);

    return <Toast
        className="data-validation-toast"
        show={ displayingNotification }
        onClose={ EditingToastsValues.hideNotification }
    >
        <Toast.Header>
            <strong className="me-auto">Уведомление</strong>
        </Toast.Header>
        <Toast.Body>{ notificationText }</Toast.Body>
    </Toast>
}
