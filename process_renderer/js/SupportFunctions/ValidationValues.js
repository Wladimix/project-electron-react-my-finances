function findElementInObjectsArray(array, desiredKey, condition) {
    return array.find(item => item[desiredKey] === condition);
}

export default {
    findElementInObjectsArray
}
