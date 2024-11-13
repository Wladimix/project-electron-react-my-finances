import knex from "knex";
import os from "os";
import path from "path";

export const DATABASE_PATH = path.join(os.homedir(), "my_finances_db.sqlite3")

const database = knex({
    client: "sqlite3",
    connection: {
        filename: DATABASE_PATH
    },
    useNullAsDefault: true
});

export default database;
export const getTablesNames = async (): Promise<string[]> =>
    (await database("sqlite_master").where("type", "table")).map(table => table.name);
