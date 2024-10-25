const knex = require("@main/ConnectionDB.js");

const { NOTES_TABLE, NOTE_MISSING } = require("@main/MainConstants.js");

class NoteModel {

    createTable() {
        return knex.schema
            .createTable(NOTES_TABLE, table => {
                table.increments("id");
                table.string("note", [70]);

                table.unique(["note"]);
            });
    };

    findMatches(substring) {
        return knex
            .select()
            .from(NOTES_TABLE)
            .whereNot({ id: 1 })
            .whereLike("note", `%${substring}%`)
            .orderBy("note", "asc");
    };

    getOne(note) {
        return knex
            .select()
            .from(NOTES_TABLE)
            .where({ note: note })
    };

    add({ note }) {
        return knex(NOTES_TABLE)
            .insert({ note });
    };

    deleteByNote(note) {
        if (note !== NOTE_MISSING) {
            return knex(NOTES_TABLE)
                .where({ note })
                .del();
        };

        return false;
    };

};

module.exports = new NoteModel();
