const ErrorService = require("@main/Error/ErrorService.js");

const { getAllNotes } = require("@main/Note/NoteService.js");
const { REQUEST_STATUS_SUCCESS, REQUEST_STATUS_ERROR } = require("@main/MainConstants.js");

class NoteController {

    async getAllNotes(event, substring) {
        try {
            const allNotes = await getAllNotes(substring);

            return {
                data: allNotes,
                status: REQUEST_STATUS_SUCCESS,
                message: "Получен список примечаний"
            }
        } catch (error) {
            return {
                status: REQUEST_STATUS_ERROR,
                message: await ErrorService.makeErrorMessage(error, "Ошибка получения списка примечаний")
            };
        };
    };

};

module.exports = new NoteController();
