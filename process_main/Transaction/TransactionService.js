const DataService = require("@main/Data/DataService.js");

const { findOrAddNote } = require("@main/Note/NoteService.js");
const { getAll, add, editById, deleteById } = require("@main/Transaction/TransactionModel.js");
const { FINANCIAL_TRANSACTIONS_TABLE_NAME } = require("@main/MainConstants.js");

class TransactionService {

    async getAllTransactions() {
        const transactions = await getAll();
        console.info(`Получены данные из таблицы "${FINANCIAL_TRANSACTIONS_TABLE_NAME}"`);

        return DataService.processDataOut(transactions);
    };

    async addTransaction(data) {
        DataService.processDataIn(data);

        const note = await findOrAddNote(data.note);

        await add({ ...data, noteId: note.id });
        console.info(`В таблицу "${FINANCIAL_TRANSACTIONS_TABLE_NAME}" добавлена транзакция`);
    };

    async editTransaction(data) {
        DataService.processDataIn(data);

        const note = await findOrAddNote(data.note);

        await editById({ ...data, noteId: note.id });
        console.info(`Запись #${data.id} в таблице "${FINANCIAL_TRANSACTIONS_TABLE_NAME}" отредактирована`);
    };

};

module.exports = new TransactionService();
