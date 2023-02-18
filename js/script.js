document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'blog.html' ;
})


function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId) ;
    const inputFieldValueString = inputField.value ;
    const inputFieldValue = parseFloat(inputFieldValueString) ;
    return inputFieldValue ;
}

function setTextElementValueById(elementId , value){
    const element = document.getElementById(elementId) ;
    element.innerText = value ;
}