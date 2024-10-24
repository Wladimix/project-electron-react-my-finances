import TransactionService from "@renderer/services/TransactionService";

import { DISTRIBUTION_MODIFIER_ID, SPENDING_CATEGORY_MODIFIER_ID } from "@renderer/RendererConstants.js";

export default class TransactionModalOutputService extends TransactionService {

    identifyAddressOrCategoryToShow() {
        const transactionAddressId = this.transactionData.transactionAddressId !== 1
            ? DISTRIBUTION_MODIFIER_ID + this.transactionData.transactionAddressId
            : this.transactionData.transactionAddressId;

        const spendingCategoryId = this.transactionData.spendingCategoryId !== 1
            ? SPENDING_CATEGORY_MODIFIER_ID + this.transactionData.spendingCategoryId
            : this.transactionData.spendingCategoryId;

        return transactionAddressId !== 1 ? transactionAddressId : spendingCategoryId;
    };

};
