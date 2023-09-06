function makeDataToDisplayBudgetUnits(loadedUnits) {
    console.log(loadedUnits);
    let dataToDisplayBudgetUnits = loadedUnits.map((elem) => {
        return {value: elem.name, label: elem.name};
    });
    console.log(dataToDisplayBudgetUnits);
    return dataToDisplayBudgetUnits;
}

export default {
    makeDataToDisplayBudgetUnits
}
