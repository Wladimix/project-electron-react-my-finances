const TransactionModel = require("@main/Transaction/TransactionModel.js");

const { addAmountToDistribution, subtractAmountFromDistribution } = require("@main/DistributionFinances/DistributionService.js");
const { FINANCIAL_EXPENCE, FINANCIAL_INCOME, FINANCIAL_TRANSFER } = require("@main/MainConstants.js");
const { getOneById: getDistributionType } = require("@main/DistributionFinances/DistributionModel.js");

class EditingTransaction {

    constructor(transactionData) {
        return (async () => {

            this.transactionData = transactionData;
            this.sourceOfTransaction = (await getDistributionType(this.transactionData.sourceOfTransactionId))[0];
            this.transactionAddress = (await getDistributionType(this.transactionData.transactionAddressId))[0];

            this.oldTransactionData = (await TransactionModel.getOneById(this.transactionData.id))[0];
            this.oldSourceOfTransaction = (await getDistributionType(this.oldTransactionData.source_of_transaction_id))[0];
            this.oldTransactionAddress = (await getDistributionType(this.oldTransactionData.transaction_address_id))[0];

            this.fictitiousData = {};
            this.fictitiousData[this.sourceOfTransaction.id] = Object.assign({}, this.sourceOfTransaction);
            this.fictitiousData[this.transactionAddress.id] = Object.assign({}, this.transactionAddress);
            this.fictitiousData[this.oldSourceOfTransaction.id] = Object.assign({}, this.oldSourceOfTransaction);
            this.fictitiousData[this.oldTransactionAddress.id] = Object.assign({}, this.oldTransactionAddress);

            return this;

        })();
    };

    check() {

        if (this.oldTransactionData.transaction_type === FINANCIAL_INCOME) {
            this.fictitiousData[this.oldTransactionAddress.id].amount -= this.oldTransactionData.amount;
        };

        if (this.oldTransactionData.transaction_type === FINANCIAL_TRANSFER) {
            this.fictitiousData[this.oldSourceOfTransaction.id].amount += this.oldTransactionData.amount;
            this.fictitiousData[this.oldTransactionAddress.id].amount -= this.oldTransactionData.amount;
        };

        if (this.oldTransactionData.transaction_type === FINANCIAL_EXPENCE) {
            this.fictitiousData[this.oldSourceOfTransaction.id].amount += this.oldTransactionData.amount;
        };

        if (this.transactionData.transactionType === FINANCIAL_INCOME) {
            this.fictitiousData[this.transactionAddress.id].amount += this.transactionData.amount;
        };

        if (this.transactionData.transactionType === FINANCIAL_TRANSFER) {
            this.fictitiousData[this.sourceOfTransaction.id].amount -= this.transactionData.amount;
            this.fictitiousData[this.transactionAddress.id].amount += this.transactionData.amount;
        };

        if (this.transactionData.transactionType === FINANCIAL_EXPENCE) {
            this.fictitiousData[this.sourceOfTransaction.id].amount -= this.transactionData.amount;
        };

        for (let distributionType in this.fictitiousData) {
            if (this.fictitiousData[distributionType].amount < 0) {
                throw new Error("Редактирование транзакции невозможно: недостаточно средств");
            };
        };

    };

    async realize() {

        if (this.oldTransactionData.transaction_type === FINANCIAL_INCOME) {
            await subtractAmountFromDistribution(this.oldTransactionAddress.id, this.oldTransactionData.amount);
        };

        if (this.oldTransactionData.transaction_type === FINANCIAL_TRANSFER) {
            await addAmountToDistribution(this.oldSourceOfTransaction.id, this.oldTransactionData.amount);
            await subtractAmountFromDistribution(this.oldTransactionAddress.id, this.oldTransactionData.amount);
        };

        if (this.oldTransactionData.transaction_type === FINANCIAL_EXPENCE) {
            await addAmountToDistribution(this.oldSourceOfTransaction.id, this.oldTransactionData.amount);
        };

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

module.exports = EditingTransaction;
