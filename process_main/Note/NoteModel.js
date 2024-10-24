const knex = require("@main/ConnectionDB.js");

const { NOTES_TABLE } = require("@main/MainConstants.js");

class NoteModel {

    createTable() {
        return knex.schema
            .createTable(NOTES_TABLE, table => {
                table.increments("id");
                table.string("note", [70]);

                table.unique(["note"]);
            });
    };

    getAll() {
        return knex
            .select()
            .from(NOTES_TABLE)
            .whereNot({ id: 1 })
            .orderBy("name", "asc");
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

    deleteById(id) {
        return knex(NOTES_TABLE)
            .where({ id })
            .del();
    };

};

module.exports = new NoteModel();
