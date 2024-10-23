const DataService = require("@main/Data/DataService");

const { getTablesNames } = require("@main/Data/DataModel.js");

class ErrorService {

    constructor(errorsDictionary = {}) {
        this.errorsDictionary = errorsDictionary;
    };

    async makeErrorMessage(errorObject, commonErrorMessage) {
        console.error(commonErrorMessage + ":");
        console.log(errorObject.message);

        const tables = await getTablesNames();
        const currentTable = DataService.findSubString(errorObject.message, tables);
        const currentError = DataService.findSubString(errorObject.message, Object.keys(this.errorsDictionary));

        const resultErrorMessage = currentError
            ? this.pasteTableName(this.errorsDictionary[currentError], currentTable)
            : null;

        return resultErrorMessage ?? commonErrorMessage;
    };

    pasteTableName(targetString, tableName) {
        return tableName
            ? targetString.replace("--table-name--", tableName)
            : targetString;
    };

};

module.exports = new ErrorService({

    "no such column":                                "Ошибка в таблице «--table-name--»: обращение к несуществующей колонке",
    "SQLITE_CONSTRAINT: UNIQUE":                     "Такое значение уже существует",
    "SQLITE_CONSTRAINT: NOT NULL constraint failed": "Ошибка в таблице «--table-name--»: некоторые значения не допускают NULL",
    "SQLITE_ERROR: no such table":                   "Обращение к несуществующей таблице"

});
