import LoadingData from "./LoadingData";

function addAndUpdateExpenseType() {
    window.databaseManagement.addExpenseType();
    window.databaseManagement.getExpensesTypes().then((res) => {
        console.log(res);
    });
}

function addAndUpdateOperation(nameOperationValue) {
    window.databaseManagement.addOperation(nameOperationValue).then(() => {
        LoadingData.updateBudgetUnits();
    });
}

export default {
    addAndUpdateExpenseType,
    addAndUpdateOperation
}
