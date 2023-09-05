module.exports = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: '/home/vladimir/my_finances_db.sqlite3'
    },
    useNullAsDefault: true
});
