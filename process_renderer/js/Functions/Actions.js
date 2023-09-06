function addExpenseType() {
    window.databaseManagement.addExpenseType();
    window.databaseManagement.getExpensesTypes().then((res) => {
        console.log(res);
    });
}

export default {
    addExpenseType
}
