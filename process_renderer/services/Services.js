import { setCategories, setDistributionTypes, setTransactions } from "@renderer/storage/dataSlice.js";
import { setTransactionsLoader } from "@renderer/storage/loadersSlice.js";

export default class Services {

    constructor(dispatch) {
        this.dispatch = dispatch;
    };

    async loadAllData() {
        const allDistributionTypes = await electron.getAllDistributionTypes();
        this.showNotification(allDistributionTypes, true);
        this.dispatch(setDistributionTypes(allDistributionTypes.data));

        const allCategories = await electron.getAllCategories();
        this.showNotification(allCategories, true);
        this.dispatch(setCategories(allCategories.data));

        this.dispatch(setTransactionsLoader(true));
        const allTransactions = await electron.getAllTransactions();
        this.showNotification(allTransactions, true);
        this.dispatch(setTransactions(allTransactions.data));
        this.dispatch(setTransactionsLoader(false));
    };

    showNotification({ status, message }, errorChecking = false) {

        if (status === "success" && !errorChecking) {
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

    checkAmount(amount) {
        return /^[\d\s]*?(\.\d{1,2})?$/.test(amount);
    };

    convertAmountToNumber(amount) {
        return Number(amount.replace(/[₽\s]+/g, ""));
    };

    makeDate(timestamp) {
        return (
            new Date(timestamp).getFullYear() + "."
            + this.#processMonthAndDay(new Date(timestamp).getMonth(), true) + "."
            + this.#processMonthAndDay(new Date(timestamp).getDate())
        );
    };

    #processMonthAndDay(monthOrDay, isMonth = false) {
        monthOrDay = isMonth ? ++monthOrDay : monthOrDay;
        return monthOrDay < 10 ? "0" + monthOrDay : monthOrDay
    };

};
