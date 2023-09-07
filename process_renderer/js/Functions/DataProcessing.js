function makeDataToDisplayBudgetCategories(loadedDistributionFinancesTypes, loadedExpensesTypes) {
    let dataToDisplayBudgetCategory = [
        {
            label: 'Распределение финансов',
            options: makeDataWithDistributionFinancesTypes(loadedDistributionFinancesTypes)
        },
        {
            label: 'Категории расходов',
            options: makeDataWithExpensesTypes(loadedExpensesTypes)
        }
    ];
    return dataToDisplayBudgetCategory;
}

function makeDataWithDistributionFinancesTypes(loadedDistributionFinancesTypes) {
    let dataToDisplayDistributionFinancesTypes = loadedDistributionFinancesTypes.map((elem) => {
        return { value: elem.id, label: elem.name, type: elem.type };
    });
    return dataToDisplayDistributionFinancesTypes;
}

function makeDataWithExpensesTypes(loadedExpensesTypes) {
    let dataToDisplayExpensesTypes = loadedExpensesTypes.map((elem) => {
        return { value: elem.id, label: elem.name, type: elem.type };
    });
    return dataToDisplayExpensesTypes;
}

function makeDataToDisplayBudgetUnits(loadedUnits) {
    let dataToDisplayBudgetUnits = loadedUnits.map((elem) => {
        return {value: elem.name, label: elem.name};
    });
    dataToDisplayBudgetUnits.shift();
    return dataToDisplayBudgetUnits;
}

function assignEmptyString(storageValue) {
    if (storageValue === '') return '';
}

export default {
    makeDataToDisplayBudgetCategories,
    makeDataToDisplayBudgetUnits,
    assignEmptyString
}
