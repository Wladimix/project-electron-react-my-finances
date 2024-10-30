const { addAmountToDistribution, subtractAmountFromDistribution } = require("@main/DistributionFinances/DistributionService.js");
const { FINANCIAL_EXPENCE, FINANCIAL_INCOME, FINANCIAL_TRANSFER } = require("@main/MainConstants.js");
const { getOneById: getDistributionType } = require("@main/DistributionFinances/DistributionModel.js");

class AddingTransaction {

    constructor(transactionData) {
        return (async () => {

            this.transactionData = transactionData;
            this.sourceOfTransaction = (await getDistributionType(this.transactionData.sourceOfTransactionId))[0];
            this.transactionAddress = (await getDistributionType(this.transactionData.transactionAddressId))[0];

            this.fictitiousData = {};
            this.fictitiousData.sourceOfTransaction = Object.assign({}, this.sourceOfTransaction);

            return this;
        })();
    };

    check() {

        if (this.transactionData.transactionType === FINANCIAL_TRANSFER || this.transactionData.transactionType === FINANCIAL_EXPENCE) {
            this.fictitiousData.sourceOfTransaction.amount -= this.transactionData.amount;
        };

        if (this.fictitiousData.sourceOfTransaction.amount < 0) {
            throw new Error("Добавление транзакции невозможно: недостаточно средств");
        };

    };

    async realize() {

        if (this.transactionData.transactionType === FINANCIAL_INCOME) {
            await addAmountToDistribution(this.transactionAddress.id, this.transactionData.amount);
        };

        if (this.transactionData.transactionType === FINANCIAL_TRANSFER) {
            await subtractAmountFromDistribution(this.sourceOfTransaction.id, this.transactionData.amount);
            await addAmountToDistribution(this.transactionAddress.id, this.transactionData.amount);
        };

        if (this.transactionData.transactionType === FINANCIAL_EXPENCE) {
            await subtractAmountFromDistribution(this.sourceOfTransaction.id, this.transactionData.amount);
        };

    };

};

module.exports = AddingTransaction;
