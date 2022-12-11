function getInputFieldValueByID(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const previousInputField = parseInt(inputFieldString);
    // console.log(previousInputField);
    inputField.value = '';
    return previousInputField;
}
function setTextElementValueByID(elementID, newValue) {
    const textElementId = document.getElementById(elementID);
    textElementId.innerText = newValue;
}

function getInputFieldValueByID(inputID) {
    const inputField = document.getElementById(inputID);
    const inputFieldString = inputField.value;
    const previousInputField = parseInt(inputFieldString);
    // console.log(previousInputField);
    inputField.value = '';
    return previousInputField;
}
function getTextFieldValueByID(elementID) {
    const textField = document.getElementById(elementID);
    const textFieldString = textField.innerText;
    const previousTextField = parseInt(textFieldString);
    // console.log(previousTextField);
    return previousTextField;
}
function setTextElementValueByID(elementID, newValue) {
    const textElementId = document.getElementById(elementID);
    textElementId.innerText = newValue;
}
