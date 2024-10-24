import React from "react";
import TransactionService from "@renderer/services/TransactionService.js";

import { NOTE_MISSING } from "@renderer/RendererConstants.js";
import { useDispatch, useSelector } from "react-redux";

export default function NoteInput() {
    const transactionData = useSelector(state => state.transactionData.data);

    const dispatch = useDispatch();
    const transactionService = new TransactionService(dispatch);

    const changeNoteEvent = e => transactionService.changeTransactionDataStorage(
        { ...transactionData, note: e.target.value }
    );

    return (
        <>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="note">Примечание</label>
                <div className="uk-form-controls">
                    <input
                        className="uk-input"
                        id="note"
                        onChange={changeNoteEvent}
                        type="text"
                        value={transactionData.note === NOTE_MISSING ? "" : transactionData.note || ""}
                    />
                </div>
            </div>

            <div>
                <div className="uk-button uk-button-secondary uk-margin-small-bottom uk-margin-small-right">Молоко</div>
                <div className="uk-button uk-button-secondary uk-margin-small-bottom uk-margin-small-right">Хлеб</div>
                <div className="uk-button uk-button-secondary uk-margin-small-bottom uk-margin-small-right">Secondary</div>
                <div className="uk-button uk-button-secondary uk-margin-small-bottom uk-margin-small-right">Secondary</div>
                <div className="uk-button uk-button-secondary uk-margin-small-bottom uk-margin-small-right">Secondary</div>
                <div className="uk-button uk-button-secondary uk-margin-small-bottom uk-margin-small-right">Secondary</div>
                <div className="uk-button uk-button-secondary uk-margin-small-bottom uk-margin-small-right">Secondary</div>
                <div className="uk-button uk-button-secondary uk-margin-small-bottom uk-margin-small-right">Secondary</div>
                <div className="uk-button uk-button-secondary uk-margin-small-bottom uk-margin-small-right">Secondary</div>
            </div>
        </>
    );
};
