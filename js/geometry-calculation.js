document.getElementById('triangle-calculate-btn').addEventListener('click', function(){
    const width = getInputFieldValueById('triangle-width-field') ;
    const hight = getInputFieldValueById('triangle-hight-field') ;
    setTextElementValueById('triangle-width', width) ;
    setTextElementValueById('triangle-hight', hight) ;
    const area = areaOfTriangle(width , hight) ;
    console.log(area)
})