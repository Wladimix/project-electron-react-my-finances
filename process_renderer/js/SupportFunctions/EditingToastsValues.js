import ToastsStorage from "../Storages/ToastsStorage.js";

function showNotification() {
    ToastsStorage.setDisplayingNotification(true);
}

function hideNotification() {
    ToastsStorage.setDisplayingNotification(false);
}

function changeNotificationText(newText) {
    ToastsStorage.setNotificationText(newText);
}

export default {
    showNotification,
    hideNotification,
    changeNotificationText
}
