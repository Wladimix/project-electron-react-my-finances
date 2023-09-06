function addAndUpdateExpenseType() {
    window.databaseManagement.addExpenseType();
    window.databaseManagement.getExpensesTypes().then((res) => {
        console.log(res);
    });
}

function addAndUpdateOperation() {
    window.databaseManagement.addOperation();
}

export default {
    addAndUpdateExpenseType,
    addAndUpdateOperation
}
