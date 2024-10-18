const knex = require("@main/ConnectionDB.js");

class DataModel {

    async getTablesNames() {
        return (await knex("sqlite_master").where("type", "table")).map(table => table.name);
    }

};

module.exports = new DataModel();
