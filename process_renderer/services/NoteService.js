import Services from "@renderer/services/Services.js";

import { setNotes } from "@renderer/storage/dataSlice.js";
import { setNotesLoader } from "@renderer/storage/loadersSlice.js";

export default class NoteService extends Services {

    async loadAllNotes(substring) {
        this.dispatch(setNotesLoader(true));

        const result = await electron.getAllNotes(substring);
        this.showNotification(result, true);

        this.dispatch(setNotes(result.data));
        this.dispatch(setNotesLoader(false));
    };

};
