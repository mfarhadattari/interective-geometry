// Triangular Area Calculation
document.getElementById('triangle-calculate-btn').addEventListener('click', function(){
    const width = getInputFieldValueById('triangle-width-field') ;
    const hight = getInputFieldValueById('triangle-hight-field') ;
    setTextElementValueById('triangle-width', width) ;
    setTextElementValueById('triangle-hight', hight) ;
    let area = areaOfTriangle(width , hight) ;
    area = area.toFixed(2) ;
    console.log(area) ;
})


// Rectangular Area Calculation
document.getElementById('rectangle-calculate-btn').addEventListener('click', function(){
    const width = getInputFieldValueById('rectangle-width-field') ;
    const length = getInputFieldValueById('rectangle-length-field') ;
    setTextElementValueById('rectangle-width', width) ;
    setTextElementValueById('rectangle-length', length) ;
    let area = areaOfRectangle(width , length) ;
    area = area.toFixed(2) ;
    console.log(area) ;
})

// Parallelogram Area Calculation
document.getElementById('parallelogram-calculate-btn').addEventListener('click', function(){
    const width = getInputFieldValueById('parallelogram-width-field') ;
    const hight = getInputFieldValueById('parallelogram-hight-field') ;
    setTextElementValueById('parallelogram-width', width) ;
    setTextElementValueById('parallelogram-hight', hight) ;
    let area = areaOfRectangle(width , hight) ;
    area = area.toFixed(2) ;
    console.log(area) ;
})


// Rhombus Area Calculation
document.getElementById('rhombus-calculate-btn').addEventListener('click', function(){
    const diagonal1 = getInputFieldValueById('rhombus-diagonal1-field') ;
    const diagonal2 = getInputFieldValueById('rhombus-diagonal2-field') ;
    setTextElementValueById('rhombus-diagonal1', diagonal1) ;
    setTextElementValueById('rhombus-diagonal2', diagonal2) ;
    let area = areaOfTriangle(diagonal1 , diagonal2) ;
    area = area.toFixed(2) ;
    console.log(area) ;
})

// Pentagon Area Calculation
document.getElementById('pentagon-calculate-btn').addEventListener('click', function(){
    const perimeter = getInputFieldValueById('pentagon-perimeter-field') ;
    const apothem = getInputFieldValueById('pentagon-apothem-field');
    setTextElementValueById('pentagon-perimeter', perimeter) ;
    setTextElementValueById('pentagon-apothem', apothem) ;
    let area = areaOfTriangle(perimeter , apothem) ;
    area = area.toFixed(2) ;
    console.log(area) ;
})

// Ellipse Area Calculation
document.getElementById('ellipse-calculate-btn').addEventListener('click', function(){
    const aAxis = getInputFieldValueById('a-Axis-field') ;
    const bAxis = getInputFieldValueById('b-Axis-field') ;
    setTextElementValueById('a-Axis' , aAxis) ;
    setTextElementValueById('b-Axis' , bAxis) ;
    let area = areaOfEllipse(aAxis, bAxis) ;
    area = area.toFixed(2) ;
    console.log(area) ;
})