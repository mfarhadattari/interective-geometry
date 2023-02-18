const closeButtons = document.getElementsByClassName('close-btn') ;
for(const closeBtn of closeButtons){
    closeBtn.addEventListener('click', function(event){
        const element = event.target.parentNode.parentNode.parentNode ;
        element.classList.add('hidden')
    })
}