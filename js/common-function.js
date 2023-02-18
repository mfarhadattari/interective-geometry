// get input field value as number by id function
function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  return inputFieldValue;
}

// get text element value by id
function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueString = element.innerText;
  const value = parseFloat(elementValueString);
  return value;
}

// Set Text field value by id function
function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

// Set Input Field Value by id
function setInputValueById(inputFieldId, value) {
  const inputField = document.getElementById(inputFieldId);
  inputField.value = value;
}

// result display function
function displayResult(resultElementId, AreaElementId, value) {
  document.getElementById(resultElementId).classList.remove("hidden");
  setTextElementValueById(AreaElementId, value);
}

// empty input Field
function emptyField(fieldId1, fieldId2) {
  const empty = "";
  setInputValueById(fieldId1, empty);
  setInputValueById(fieldId2, empty);
}

// Change Unite: m to cm function
function convertCmUnite(uniteId) {
  const uniteField = document.getElementById(uniteId);
  uniteField.innerHTML = `cm<sup>2</sup>`;
}

// cm to m unite change function
function convertMUnite(uniteId) {
  const uniteField = document.getElementById(uniteId);
  uniteField.innerHTML = `m<sup>2</sup>`;
}

// cm to m converter function
function meterConverter(elementId, uniteId){
    const  cmArea = getTextElementValueById(elementId) ;
    const meterArea = (cmArea / 10000) ;
    setTextElementValueById(elementId, meterArea) ;
}

// hide btn
function btnHide(btnId){
    const btn = document.getElementById(btnId) ;
    btn.classList.add('invisible') ;
}

// show btn
function btnShow(btnId){
    const btn = document.getElementById(btnId) ;
    btn.classList.remove('invisible') ;
}