document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'blog.html' ;
})


function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId) ;
    const inputFieldValueString = inputField.value ;
    const inputFieldValue = parseFloat(inputFieldValueString) ;
}

function setTextElementValueById(elementId){
    const element = document.getElementById(elementId) ;
    element.innerText = element ;
}