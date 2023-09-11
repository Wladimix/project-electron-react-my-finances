import { DISTRIBUTION_OF_FINANCES, EXPENSES_CATEGORIES } from "../Constants";

function makeDataToDisplayBudgetCategories(loadedDistributionFinancesTypes, loadedExpensesTypes) {
    return [
        {
            label: 'Распределение финансов',
            options: makeDataWithDistributionFinancesTypes(loadedDistributionFinancesTypes)
        },
        {
            label: 'Категории расходов',
            options: makeDataWithExpensesCategories(loadedExpensesTypes)
        }
    ];
}

function makeDataWithDistributionFinancesTypes(loadedDistributionFinancesTypes) {
    return loadedDistributionFinancesTypes.map((elem) => {
        return { value: changeIdForSelect(elem.id, DISTRIBUTION_OF_FINANCES), label: elem.name };
    });
}

function makeDataWithExpensesCategories(loadedExpensesTypes) {
    return loadedExpensesTypes.map((elem) => {
        return { value: changeIdForSelect(elem.id, EXPENSES_CATEGORIES), label: elem.name };
    });
}

function changeIdForSelect(id, type) {
    if (type === DISTRIBUTION_OF_FINANCES) {
        return id + '-' + DISTRIBUTION_OF_FINANCES;
    } if (type === EXPENSES_CATEGORIES) {
        return id + '-' + EXPENSES_CATEGORIES;
    }
}

function changeIdForSendToMainProcess(id) {
    return Number(id[0]);
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
    makeDataWithDistributionFinancesTypes,
    changeIdForSendToMainProcess,
    makeDataToDisplayBudgetUnits,
    assignEmptyString
}
