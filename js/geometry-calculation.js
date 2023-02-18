// Triangular Area Calculation
document.getElementById('triangle-calculate-btn').addEventListener('click', function(){
    const width = getInputFieldValueById('triangle-width-field') ;
    const hight = getInputFieldValueById('triangle-hight-field') ;
    setTextElementValueById('triangle-width', width) ;
    setTextElementValueById('triangle-hight', hight) ;
    const area = areaOfTriangle(width , hight) ;
    console.log(area) ;
})


// Rectangular Area Calculation
document.getElementById('rectangle-calculate-btn').addEventListener('click', function(){
    const width = getInputFieldValueById('rectangle-width-field') ;
    const length = getInputFieldValueById('rectangle-length-field') ;
    setTextElementValueById('rectangle-width', width) ;
    setTextElementValueById('rectangle-length', length) ;
    const area = areaOfRectangle(width , length) ;
    console.log(area) ;
})