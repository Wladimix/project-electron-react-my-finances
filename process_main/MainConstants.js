const homeDir = require("os").homedir();

class MainConstants {
    get DATABASE_PATH() { return homeDir + "/my_finances_db.sqlite3" };

    get DISTRIBUTION_OF_FINANCES_TABLE_NAME() { return "distribution_of_finances" };
    get SPENDING_CATEGORIES_TABLE_NAME() { return "spending_categories" };
}

module.exports = new MainConstants();
