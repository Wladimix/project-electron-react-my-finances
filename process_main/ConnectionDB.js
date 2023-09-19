const Constants = require('../process_main/Constants.js');

module.exports = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: Constants.DATABASE_PATH
    },
    useNullAsDefault: true
});
