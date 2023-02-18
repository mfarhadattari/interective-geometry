document.getElementById('triangle-meter-covert-btn').addEventListener('click', function(){
    meterConverter('triangle-area') ;
    convertMUnite('triangle-unite');
    btnHide('triangle-meter-covert-btn') ;
})
document.getElementById('rectangle-meter-covert-btn').addEventListener('click', function(){
    meterConverter('rectangle-area') ;
    convertMUnite('rectangle-unite');
    btnHide('rectangle-meter-covert-btn') ;
})
document.getElementById('parallelogram-meter-covert-btn').addEventListener('click', function(){
    meterConverter('parallelogram-area', 'parallelogram-unite') ;
    btnHide('parallelogram-meter-covert-btn') ;
})

document.getElementById('rhombus-meter-covert-btn').addEventListener('click', function(){
    meterConverter('rhombus-area') ;
    convertMUnite('rhombus-unite');
    btnHide('rhombus-meter-covert-btn') ;
})
document.getElementById('pentagon-meter-covert-btn').addEventListener('click', function(){
    meterConverter('pentagon-area') ;
    convertMUnite('pentagon-unite');
    btnHide('pentagon-meter-covert-btn') ;

})

document.getElementById('ellipse-meter-covert-btn').addEventListener('click', function(){
    meterConverter('ellipse-area') ;
    convertMUnite('ellipse-unite');
    btnHide('ellipse-meter-covert-btn') ;

})

