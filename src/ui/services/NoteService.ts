import { dataState, setNotes } from "../storage/dataSlice";
import { Dispatch, ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { showNotification } from "../lib/utils";
import { VALUE_MISSING } from "../constants";

export default class NoteService {

    private dispatch;

    constructor(dispatch: ThunkDispatch<{ data: dataState }, undefined, UnknownAction> & Dispatch<UnknownAction> | null = null) {
        this.dispatch = dispatch ?? null;
    };

    async loadNotes(substring: string): Promise<void> {
        if (this.dispatch) {
            // this.dispatch(setNotesLoader(true));

            const result = await window.electron.getNotes(substring);
            showNotification(result, { onlyErrorChecking: true });

            this.dispatch(setNotes(result.data));
            // this.dispatch(setNotesLoader(false));
        }
    };

    processNote(note: string): string {
        return note === "" || /^\s+$/g.test(note) ? VALUE_MISSING : note;
    };

};
