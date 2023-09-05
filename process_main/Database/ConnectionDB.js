const Constants = require('../Constants');

module.exports = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: Constants.DATABASE_PATH
    },
    useNullAsDefault: true
});
