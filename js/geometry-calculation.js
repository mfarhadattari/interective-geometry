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

// Parallelogram Area Calculation
document.getElementById('parallelogram-calculate-btn').addEventListener('click', function(){
    const width = getInputFieldValueById('parallelogram-width-field') ;
    const hight = getInputFieldValueById('parallelogram-hight-field') ;
    setTextElementValueById('parallelogram-width', width) ;
    setTextElementValueById('parallelogram-hight', hight) ;
    const area = areaOfRectangle(width , hight) ;
    console.log(area) ;
})


// Rhombus Area Calculation
document.getElementById('rhombus-calculate-btn').addEventListener('click', function(){
    const diagonal1 = getInputFieldValueById('rhombus-diagonal1-field') ;
    const diagonal2 = getInputFieldValueById('rhombus-diagonal2-field') ;
    setTextElementValueById('rhombus-diagonal1', diagonal1) ;
    setTextElementValueById('rhombus-diagonal2', diagonal2) ;
    const area = areaOfTriangle(diagonal1 , diagonal2) ;
    console.log(area) ;
})