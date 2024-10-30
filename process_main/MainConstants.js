const homeDir = require("os").homedir();

class MainConstants {

    get FINANCIAL_INCOME() { return "ДОХОД" };
    get FINANCIAL_TRANSFER() { return "ПЕРЕВОД" };
    get FINANCIAL_EXPENCE() { return "РАСХОД" };

    get DATABASE_PATH() { return homeDir + "/my_finances_db.sqlite3" };

    get REQUEST_STATUS_SUCCESS() { return "success" };
    get REQUEST_STATUS_ERROR() { return "error" };

    get DISTRIBUTION_OF_FINANCES_TABLE_NAME() { return "distribution_of_finances" };
    get SPENDING_CATEGORIES_TABLE_NAME() { return "spending_categories" };
    get FINANCIAL_TRANSACTIONS_TABLE_NAME() { return "financial_transactions" };
    get NOTES_TABLE() { return "notes" };

    get NOTE_MISSING() { return "примечание отсутствует" };

}

module.exports = new MainConstants();
