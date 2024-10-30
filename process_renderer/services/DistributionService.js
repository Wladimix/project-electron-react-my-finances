import Services from "@renderer/services/Services.js";

import { setDistributionTypes, setTransactions } from "@renderer/storage/dataSlice.js";
import { setAddingDistributionLoader, setEditingDistributionLoader } from "@renderer/storage/loadersSlice.js";

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

        const allTransactions = await electron.getAllTransactions();
        this.showNotification(allTransactions, true);

        this.dispatch(setDistributionTypes(allDistributionTypes.data));
        this.dispatch(setTransactions(allTransactions.data));
        this.dispatch(setEditingDistributionLoader(false));
    };

    async deleteDistributionType(id, name, amount) {
        this.dispatch(setEditingDistributionLoader(id));

        const resultDeleting = await electron.deleteDistributionType({ id, name, amount });
        this.showNotification(resultDeleting);

        const allDistributionTypes = await electron.getAllDistributionTypes();
        this.showNotification(allDistributionTypes, true);

        const allTransactions = await electron.getAllTransactions();
        this.showNotification(allTransactions, true);

        this.dispatch(setDistributionTypes(allDistributionTypes.data));
        this.dispatch(setTransactions(allTransactions.data));
        this.dispatch(setEditingDistributionLoader(false));
    }

    checkDistributionType(name, amount) {
        return name && this.checkAmount(amount);
    };

};
