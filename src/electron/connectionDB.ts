import knex from "knex";

import { DATABASE_PATH } from "./constants";

export default knex({
    client: "sqlite3",
    connection: {
        filename: DATABASE_PATH
    },
    useNullAsDefault: true
});
