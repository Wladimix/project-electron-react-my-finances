import { createEvent, createStore } from "effector";

const setDisplayingNotification = createEvent();
const $displayingNotification = createStore(false).on(setDisplayingNotification, (_, newValue) => newValue);

const setNotificationText = createEvent();
const $notificationText = createStore('').on(setNotificationText, (_, newText) => newText);

export default {
    setDisplayingNotification,
    $displayingNotification,

    setNotificationText,
    $notificationText
}
