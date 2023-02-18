// blog btn
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'blog.html' ;
})

// get input field value as number by id function
function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId) ;
    const inputFieldValueString = inputField.value ;
    const inputFieldValue = parseFloat(inputFieldValueString) ;
    return inputFieldValue ;
}

// Set Text field value by id function
function setTextElementValueById(elementId , value){
    const element = document.getElementById(elementId) ;
    element.innerText = value ;
}

// Set Input Field Value by id
function setInputValueById(inputFieldId, value){
    const inputField = document.getElementById(inputFieldId) ;
    inputField.value = value ;
}

// result display function
function displayResult(resultElementId, AreaElementId, value) {
    document.getElementById(resultElementId).classList.remove("hidden");
    setTextElementValueById(AreaElementId, value);
  }

// empty input Field
function emptyField(fieldId1 , fieldId2){
    const empty = '' ;
    setInputValueById(fieldId1, empty);
    setInputValueById(fieldId2, empty);
}
  
