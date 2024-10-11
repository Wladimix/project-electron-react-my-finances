const { DATABASE_PATH } = require("./MainConstants.js");

module.exports = require("knex")({
    client: "sqlite3",
    connection: {
        filename: DATABASE_PATH
    },
    useNullAsDefault: true
});
