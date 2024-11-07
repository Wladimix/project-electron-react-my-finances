import os from "os";
import path from 'path';

export const DATABASE_PATH = path.join(os.homedir(), "my_finances_db.sqlite3")

export enum TablesNames {
    DISTRIBUTION_OF_FINANCES_TABLE_NAME = "distribution_of_finances",
    SPENDING_CATEGORIES_TABLE_NAME = "spending_categories",
    FINANCIAL_TRANSACTIONS_TABLE_NAME = "financial_transactions",
    NOTES_TABLE = "notes"
}

export enum RequestStatuses {
    SUCCESS = "success",
    ERROR = "error"
}
