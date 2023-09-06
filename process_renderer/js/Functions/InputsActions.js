import InputsValuesStorage from '../Storage/InputsValuesStorage';

function changeOfNameOperationValue(event) {
    InputsValuesStorage.setNameOperationValue(event.target.value);
}

export default {
    changeOfNameOperationValue
}
