import UIkit from "uikit";

export function showNotification({ status, message } : ResponceData<any>, { onlyErrorChecking }: { onlyErrorChecking: boolean } = { onlyErrorChecking: false }) {

    if (status === "success" && !onlyErrorChecking) {
        UIkit.notification({
            status: "success",
            message
        });
    };

    if (status === "error") {
        UIkit.notification({
            status: "danger",
            message
        });
    };

};

export function checkAmount(amount: string): boolean {
    return /^[\d\s]*?(\.\d{1,2})?(\s₽)?$/.test(amount);
};

export function makeDate(date: Date): string {
    return date.getFullYear() + "." + addZero(date.getMonth(), { isMonth: true });
};

function addZero(value: number, { isMonth }: { isMonth: boolean } = { isMonth: false }): string {
    value = isMonth ? ++value : value;
    return value < 10 ? "0" + value : String(value);
};
