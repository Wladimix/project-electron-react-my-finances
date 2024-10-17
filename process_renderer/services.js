import { setData } from "@renderer/storage/DataSlice.js";
import { setDistributionLoader } from "@renderer/storage/LoadersSlice.js";

class Services {

    async loadAllData(dispatch) {
        const allDistributionTypes = await electron.getAllDistributionTypes();
        dispatch(setData(allDistributionTypes));
    };

    async addDistributionType(dispatch, name, amount) {
        dispatch(setDistributionLoader(true));
        await electron.addDistributionType({ name, amount });
        const allDistributionTypes = await electron.getAllDistributionTypes();
        dispatch(setData(allDistributionTypes));
        dispatch(setDistributionLoader(false));
    };

    checkDistributionType(name, amount) {
        return name && /^[\d\s]*?(\.\d{1,2})?$/.test(amount);
    };

};

export default new Services();
