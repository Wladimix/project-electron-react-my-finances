import Services from "@renderer/services/Services.js";

import { setData } from "@renderer/storage/DataSlice.js";
import { setDistributionLoader } from "@renderer/storage/LoadersSlice.js";

export default class DistributionService extends Services {

    async addDistributionType(name, amount) {
        this.dispatch(setDistributionLoader(true));

        const resultAdding = await electron.addDistributionType({ name, amount });
        this.showNotification(resultAdding);

        const allDistributionTypes = await electron.getAllDistributionTypes();
        this.showNotification(allDistributionTypes, true);

        this.dispatch(setData(allDistributionTypes.data));
        this.dispatch(setDistributionLoader(false));
    };

    checkDistributionType(name, amount) {
        return name && this.checkAmount(amount);
    };

};
