function checkPresenceElementInObjectsArray(array, desiredKey, condition) {
    return array.find(item => item[desiredKey].toLowerCase() === condition.toLowerCase());
}

function findIndexOfElementInArray(array, condition) {
    return array.findIndex(item => item.name.toLowerCase() === condition.toLowerCase());
}

function deleteArrayElement(array, condition) {
    return array.filter(item => item.name.toLowerCase() !== condition.toLowerCase());
}

function removeExtraSpaces(string) {
    return string.trim().replace(/\s+/g, ' ');
}

export default {
    checkPresenceElementInObjectsArray,
    findIndexOfElementInArray,
    deleteArrayElement,
    removeExtraSpaces
}
