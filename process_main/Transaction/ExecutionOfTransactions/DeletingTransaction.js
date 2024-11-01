const { addAmountToDistribution, subtractAmountFromDistribution } = require("@main/DistributionFinances/DistributionService.js");
const { FINANCIAL_EXPENCE, FINANCIAL_INCOME, FINANCIAL_TRANSFER } = require("@main/MainConstants.js");
const { getOneById: getDistributionType } = require("@main/DistributionFinances/DistributionModel.js");

class DeletingTransaction {

    constructor(transactionData) {
        return (async () => {
            console.log(transactionData);

            this.transactionData = transactionData;
            this.sourceOfTransaction = (await getDistributionType(this.transactionData.sourceOfTransactionId))[0];
            this.transactionAddress = (await getDistributionType(this.transactionData.transactionAddressId))[0];

            this.fictitiousData = {};
            this.fictitiousData.sourceOfTransaction = Object.assign({}, this.sourceOfTransaction);
            this.fictitiousData.transactionAddress = Object.assign({}, this.transactionAddress);

            return this;

        })();
    };

    check() {

        if (this.transactionData.transactionType === FINANCIAL_INCOME) {
            this.fictitiousData.transactionAddress.amount -= this.transactionData.amount;
        };

        if (this.transactionData.transactionType === FINANCIAL_TRANSFER) {
            this.fictitiousData.sourceOfTransaction.amount += this.transactionData.amount;
            this.fictitiousData.transactionAddress.amount -= this.transactionData.amount;
        };

        if (this.transactionData.transactionType === FINANCIAL_EXPENCE) {
            this.fictitiousData.sourceOfTransaction.amount += this.transactionData.amount;
        };

        if (this.fictitiousData.transactionAddress.amount < 0) {
            throw new Error("Удаление транзакции невозможно: недостаточно средств");
        };

    };

    async realize() {

        if (this.transactionData.transactionType === FINANCIAL_INCOME) {
            await subtractAmountFromDistribution(this.transactionAddress.id, this.transactionData.amount);
        };

        if (this.transactionData.transactionType === FINANCIAL_TRANSFER) {
            await addAmountToDistribution(this.sourceOfTransaction.id, this.transactionData.amount);
            await subtractAmountFromDistribution(this.transactionAddress.id, this.transactionData.amount);
        };

        if (this.transactionData.transactionType === FINANCIAL_EXPENCE) {
            await addAmountToDistribution(this.sourceOfTransaction.id, this.transactionData.amount);
        };

    };

};

module.exports = DeletingTransaction;
