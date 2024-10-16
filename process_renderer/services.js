import { setData } from "@renderer/storage/DataSlice.js";

class Services {

    async loadAllData(dispatch) {
        const allDistributionTypes = await electron.getAllDistributionTypes();
        dispatch(setData(allDistributionTypes));
    }

}

export default new Services();
