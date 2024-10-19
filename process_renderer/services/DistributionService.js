import Services from "@renderer/services/Services.js";

import { setDistributionTypes } from "@renderer/storage/DataSlice.js";
import { setAddingDistributionLoader, setEditingDistributionLoader } from "@renderer/storage/LoadersSlice.js";

export default class DistributionService extends Services {

    async addDistributionType(name, amount) {
        this.dispatch(setAddingDistributionLoader(true));

        const resultAdding = await electron.addDistributionType({ name, amount });
        this.showNotification(resultAdding);

        const allDistributionTypes = await electron.getAllDistributionTypes();
        this.showNotification(allDistributionTypes, true);

        this.dispatch(setDistributionTypes(allDistributionTypes.data));
        this.dispatch(setAddingDistributionLoader(false));
    };

    async editDistributionType(id, name, amount) {
        this.dispatch(setEditingDistributionLoader(id));

        const resultEditing = await electron.editDistributionType({ id, name, amount });
        this.showNotification(resultEditing);

        const allDistributionTypes = await electron.getAllDistributionTypes();
        this.showNotification(allDistributionTypes, true);

        this.dispatch(setDistributionTypes(allDistributionTypes.data));
        this.dispatch(setEditingDistributionLoader(false));
    };

    async deleteDistributionType(id) {
        this.dispatch(setEditingDistributionLoader(id));

        const resultDeleting = await electron.deleteDistributionType(id);
        this.showNotification(resultDeleting);

        const allDistributionTypes = await electron.getAllDistributionTypes();
        this.showNotification(allDistributionTypes, true);

        this.dispatch(setDistributionTypes(allDistributionTypes.data));
        this.dispatch(setEditingDistributionLoader(false));
    }

    checkDistributionType(name, amount) {
        return name && this.checkAmount(amount);
    };

};
