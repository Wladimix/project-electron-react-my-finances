function findElementInObjectsArray(array, desiredKey, condition) {
    return array.find(item => item[desiredKey] === condition);
}

function removeExtraSpaces(string) {
    return string.trim().replace(/\s+/g, ' ');
}

export default {
    findElementInObjectsArray,
    removeExtraSpaces
}
