// blog btn
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'blog.html' ;
})


// Random bg color for card 
function rgbColorValue() {
    const rgbValue = Math.floor(Math.random() * 255);
    return rgbValue ;
}
function alphaValue() {
    const alphaValue = (Math.random());
    return alphaValue ;
}
const cards = document.getElementsByClassName('card') ;
for(const card of cards){
    card.addEventListener('mouseenter', function(){
        card.style.backgroundColor = 'rgba('+rgbColorValue() +','+rgbColorValue() 
            + ',' + rgbColorValue() + ' ,'+alphaValue()+' )'
    })
}
