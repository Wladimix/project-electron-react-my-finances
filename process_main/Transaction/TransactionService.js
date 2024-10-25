const DataService = require("@main/Data/DataService.js");
const TransactionModel = require("@main/Transaction/TransactionModel.js");

const { deleteByNote: deleteNote } = require("@main/Note/NoteModel.js");
const { FINANCIAL_TRANSACTIONS_TABLE_NAME } = require("@main/MainConstants.js");
const { findOrAddNote } = require("@main/Note/NoteService.js");

class TransactionService {

    async getAllTransactions() {
        const transactions = await TransactionModel.getAll();
        console.info(`Получены данные из таблицы "${FINANCIAL_TRANSACTIONS_TABLE_NAME}"`);

        return DataService.processDataOut(transactions);
    };

    async addTransaction(data) {
        DataService.processDataIn(data);

        const note = await findOrAddNote(data.note);

        await TransactionModel.add({ ...data, noteId: note.id });
        console.info(`В таблицу "${FINANCIAL_TRANSACTIONS_TABLE_NAME}" добавлена транзакция`);
    };

    async editTransaction(data) {
        DataService.processDataIn(data);

        const noteBeforeEditing = (await this.getNoteBeforeEditing(data.id))[0];
        const noteForEditing = await findOrAddNote(data.note);

        await TransactionModel.editById({ ...data, noteId: noteForEditing.id });
        console.info(`Запись #${data.id} в таблице "${FINANCIAL_TRANSACTIONS_TABLE_NAME}" отредактирована`);

        if (noteBeforeEditing.note !== noteForEditing.note) {
            await this.deleteExtraNote(noteBeforeEditing);
        };
    };

    async getNoteBeforeEditing(transactionId) {
        console.info("Получение примечания до редактирования транзакции");
        const columnName = `${FINANCIAL_TRANSACTIONS_TABLE_NAME}.id`
        return await TransactionModel.getNotes({ [columnName]: transactionId });
    };

    async deleteExtraNote(noteBeforeEditing) {
        const notesList = await TransactionModel.getNotes();
        console.info("Получен список примечаний");

        for (let note of notesList) {
            if (note.note === noteBeforeEditing.note) {
                return;
            };
        }

        const result = await deleteNote(noteBeforeEditing.note);
        if (result) console.info("Удалено лишнее примечание");
    };

};

module.exports = new TransactionService();
