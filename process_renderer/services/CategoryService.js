import Services from "@renderer/services/Services.js";

import { setCategories } from "@renderer/storage/dataSlice.js";
import { setAddingCategoryLoader, setEditingCategoryLoader } from "@renderer/storage/loadersSlice.js";

export default class DistributionService extends Services {

    async addCategory(name) {
        this.dispatch(setAddingCategoryLoader(true));

        const resultAdding = await electron.addCategory(name);
        this.showNotification(resultAdding);

        const allCategories = await electron.getAllCategories();
        this.showNotification(allCategories, true);

        this.dispatch(setCategories(allCategories.data));
        this.dispatch(setAddingCategoryLoader(false));
    };

    async editCategory(id, name) {
        this.dispatch(setEditingCategoryLoader(id));

        const resultEditing = await electron.editCategory({ id, name });
        this.showNotification(resultEditing);

        const allCategories = await electron.getAllCategories();
        this.showNotification(allCategories, true);

        this.dispatch(setCategories(allCategories.data));
        this.dispatch(setEditingCategoryLoader(false));
    };

    async deleteCategory(id, name) {
        this.dispatch(setEditingCategoryLoader(id));

        const resultDeleting = await electron.deleteCategory({ id, name });
        this.showNotification(resultDeleting);

        const allCategories = await electron.getAllCategories();
        this.showNotification(allCategories, true);

        this.dispatch(setCategories(allCategories.data));
        this.dispatch(setEditingCategoryLoader(false));
    };

    checkCategory(name) {
        return Boolean(name);
    };

};
