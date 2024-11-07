export default function NoteInput() {
    return (
        <>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="note">Примечание</label>
                <div className="uk-form-controls">
                    <input
                        className="uk-input"
                        id="note"
                        onChange={() => {}}
                        type="text"
                        value={""}
                    />
                </div>
            </div>

            <div>
                {
                    ['test'].map(note => (
                        <div
                            className="uk-button uk-button-secondary uk-margin-small-bottom uk-margin-small-right"
                            key={note[0]}
                            onClick={() => { }}
                        >
                            {'note.note'}
                        </div>
                    ))
                }
            </div>

        </>
    );
};
