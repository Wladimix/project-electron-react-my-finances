import { setData } from "@renderer/storage/DataSlice.js";

export default class Services {

    constructor(dispatch) {
        this.dispatch = dispatch;
    };

    async loadAllData() {
        const allDistributionTypes = await electron.getAllDistributionTypes();
        this.showNotification(allDistributionTypes, true);
        this.dispatch(setData(allDistributionTypes.data));
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

};
