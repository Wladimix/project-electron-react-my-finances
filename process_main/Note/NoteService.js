const TransactionModel = require("@main/Transaction/TransactionModel.js");

const { deleteByNote } = require("@main/Note/NoteModel.js");
const { findMatches, getOne, add } = require("@main/Note/NoteModel.js");
const { NOTES_TABLE } = require("@main/MainConstants.js");

class NoteService {

    async getAllNotes(substring) {
        const notes = await findMatches(substring);
        console.info(`Получены данные из таблицы "${NOTES_TABLE}"`);

        return notes;
    };

    async findOrAddNote(note) {
        console.info(`Поиск примечания в таблице "${NOTES_TABLE}"`);
        const requiredNote = await getOne(note);

        if (requiredNote.length) {
            console.info("Примечание найдено");
            return requiredNote[0];
        } else {
            console.info("Примечание не найдено");
            await add({ note })
            console.info(`Добавлено примечание в таблицу "${NOTES_TABLE}"`);
            const requiredNote = await getOne(note);
            return requiredNote[0];
        };
    };

    async addNote(data) {
        await add(data);
        console.info(`В таблицу "${NOTES_TABLE}" добавлено примечание`);
    };

    async deleteExtraNote(noteForDeleting) {
        const notesList = await TransactionModel.getNotes();
        console.info("Получен список примечаний");

        for (let note of notesList) {
            if (note.note === noteForDeleting) {
                return;
            };
        }

        const result = await deleteByNote(noteForDeleting);
        if (result) console.info("Удалено лишнее примечание");
    };

};

module.exports = new NoteService();
