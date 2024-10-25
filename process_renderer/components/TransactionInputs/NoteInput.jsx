import NoteService from "@renderer/services/NoteService";
import React from "react";
import Services from "@renderer/services/Services";
import TransactionService from "@renderer/services/TransactionService.js";

import { NOTE_MISSING } from "@renderer/RendererConstants.js";
import { useDispatch, useSelector } from "react-redux";

export default function NoteInput() {
    const transactionData = useSelector(state => state.transactionData.data);
    const notesLoader = useSelector(state => state.loaders.notesLoader);
    const notes = useSelector(state => state.data.notes);
    const timer = useSelector(state => state.timer);

    const dispatch = useDispatch();
    const services = new Services(dispatch);
    const transactionService = new TransactionService(dispatch);
    const noteService = new NoteService(dispatch);

    const changeNoteButtonEvent = value => {
        transactionService.changeTransactionDataStorage({ ...transactionData, note: value.note });
    };

    const changeNoteInputEvent = e => {
        transactionService.changeTransactionDataStorage({ ...transactionData, note: e.target.value.toLowerCase().replace(/ +/g, ' ') });

        noteService.loadAllNotes = services.debounceDecorator(noteService.loadAllNotes, 1000, timer);
        noteService.loadAllNotes(e.target.value.toLowerCase().trim().replace(/ +/g, ' '));
    };

    return (
        <>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="note">Примечание</label>
                <div className="uk-form-controls">
                    <input
                        className="uk-input"
                        id="note"
                        onChange={changeNoteInputEvent}
                        type="text"
                        value={transactionData.note === NOTE_MISSING ? "" : transactionData.note || ""}
                    />
                </div>
            </div>

            {
                notesLoader
                    ?   <div className="uk-text-large uk-text-warning">
                            Поиск совпадений... <div data-uk-spinner/>
                        </div>

                    :   <div>
                            {
                                notes.map(note => (
                                    <div
                                        className="uk-button uk-button-secondary uk-margin-small-bottom uk-margin-small-right"
                                        key={note.id}
                                        onClick={() => { changeNoteButtonEvent(note) }}
                                    >
                                        {note.note}
                                    </div>
                                ))
                            }
                        </div>
            }

        </>
    );
};
