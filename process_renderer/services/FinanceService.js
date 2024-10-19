import Services from "@renderer/services/Services.js";

export default class FinanceService extends Services {

    calculateCapital(distributionTypes) {
        return this.processAmount(distributionTypes.reduce((capital, distributionType) => (
            capital + this.convertAmountToNumber(distributionType.amount)
        ), 0));
    };

    processAmount(amount) {
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

};
