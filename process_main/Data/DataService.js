const { NOT_DEFINE } = require("@main/MainConstants.js");

class DataService {

    processDataIn(data) {
        for (const key in data) {
            switch (key) {
                case "name":
                    data[key] = this.#removeSpaces(data[key]);
                    break;
                case "note":
                    data[key] = this.#removeSpaces(data[key]).toLowerCase();
                    break;
                case "amount":
                    data[key] = this.#processAmountIn(data[key]);
                    break;
            };
        };
    };

    #removeSpaces(string, all = false) {
        return all
            ? string.trim().replace(/ +/g, '')
            : string.trim().replace(/ +/g, ' ');
    };

    #processAmountIn(amount) {
        amount = amount === "" ? "0.00" : amount;
        return parseFloat(this.#removeSpaces(amount, true));
    };

    processDataOut(data) {
        return data.map(elem =>
            elem.amount !== undefined
                ? { ...elem, amount: this.#processAmountOut(elem.amount) }
                : elem
        );
    };

    #processAmountOut(amount) {
        const array = (amount.toFixed(2)).split("");
        const newArray = [];

        for (let i = -6; i > (-array.length); i = -3) {
            newArray.push(array.splice(i));
            newArray.push(" ");
        };

        newArray.push(array);

        const result = newArray
            .reverse()
            .map(elem => Array.isArray(elem) ? elem.join("") : elem)
            .join("");

        return result + " ₽";
    };

    findSubString(targetString, searchStringsArray) {
        let searchString = false;

        for (let string of searchStringsArray) {
            if (targetString.includes(string)) {
                searchString = string;
                break;
            };
        };

        return searchString;
    };

    makeDateSearchOptions(year, month) {
        return [
            new Date(year && year !== NOT_DEFINE ? year : 1970,                     month && month !== NOT_DEFINE ? month : 0,  1,                           0,  0,  0),
            new Date(year && year !== NOT_DEFINE ? year : new Date().getFullYear(), month && month !== NOT_DEFINE ? month : 11, this.getLastMonthDay(month), 23, 59, 59)
        ];
    };

    getLastMonthDay(month) {
        return month && month !== NOT_DEFINE ? new Date(1970, month + 1, 0).getDate() : 31;
    };

};

module.exports = new DataService();
