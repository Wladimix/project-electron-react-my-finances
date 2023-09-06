function addAndUpdateExpenseType() {
    window.databaseManagement.addExpenseType();
    window.databaseManagement.getExpensesTypes().then((res) => {
        console.log(res);
    });
}

function addAndUpdateOperation(nameOperationValue) {
    window.databaseManagement.addOperation(nameOperationValue);
}

export default {
    addAndUpdateExpenseType,
    addAndUpdateOperation
}
