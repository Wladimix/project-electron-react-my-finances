import LoadingData from "./LoadingData";

function addAndUpdateExpenseType() {
    window.databaseManagement.addExpenseType();
    window.databaseManagement.getExpensesTypes().then((res) => {
        console.log(res);
    });
}

function addAndUpdateOperation(nameOperationValue) {
    window.databaseManagement.addOperation(nameOperationValue).then((result) => {
        console.log(result);
        LoadingData.updateBudgetUnits();
    });
}

export default {
    addAndUpdateExpenseType,
    addAndUpdateOperation
}
