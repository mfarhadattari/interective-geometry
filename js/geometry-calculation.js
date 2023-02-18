// Triangular Area Calculation
document
  .getElementById("triangle-calculate-btn")
  .addEventListener("click", function () {
    const base = getInputFieldValueById("triangle-base-field");
    const hight = getInputFieldValueById("triangle-hight-field");

    // number validation
    if(isNaN(base) || isNaN(hight)){
      alert('Please Input Only Number') ;
      emptyField('triangle-base-field' ,'triangle-hight-field' ) ;
      return ;
    }
    
    setTextElementValueById("triangle-base", base);
    setTextElementValueById("triangle-hight", hight);
    let area = areaOfTriangleType(base, hight);
    displayResult("triangle-result", "triangle-area", area);
  });

// Rectangular Area Calculation
document
  .getElementById("rectangle-calculate-btn")
  .addEventListener("click", function () {
    const width = getInputFieldValueById("rectangle-width-field");
    const length = getInputFieldValueById("rectangle-length-field");
    // number validation
    if(isNaN(width) || isNaN(length)){
      alert('Please Input Only Number') ;
      emptyField('rectangle-width-field' ,'rectangle-length-field' ) ;
      return ;
    }

    setTextElementValueById("rectangle-width", width);
    setTextElementValueById("rectangle-length", length);
    let area = areaOfRectangularType(width, length);

    displayResult("rectangle-result", "rectangle-area", area);
  });

// Parallelogram Area Calculation
document
  .getElementById("parallelogram-calculate-btn")
  .addEventListener("click", function () {
    const width = getInputFieldValueById("parallelogram-width-field");
    const hight = getInputFieldValueById("parallelogram-hight-field");
    // number validation
    if(isNaN(width) || isNaN(hight)){
      alert('Please Input Only Number') ;
      emptyField('parallelogram-width-field' ,'parallelogram-hight-field' ) ;
      return ;
    }
    setTextElementValueById("parallelogram-width", width);
    setTextElementValueById("parallelogram-hight", hight);
    let area = areaOfRectangularType(width, hight);

    displayResult("parallelogram-result", "parallelogram-area", area);
  });

// Rhombus Area Calculation
document
  .getElementById("rhombus-calculate-btn")
  .addEventListener("click", function () {
    const diagonal1 = getInputFieldValueById("rhombus-diagonal1-field");
    const diagonal2 = getInputFieldValueById("rhombus-diagonal2-field");

    // number validation
    if(isNaN(diagonal1) || isNaN(diagonal2)){
      alert('Please Input Only Number') ;
      emptyField('rhombus-diagonal1-field', 'rhombus-diagonal2-field') ;
      return ;
    }

    setTextElementValueById("rhombus-diagonal1", diagonal1);
    setTextElementValueById("rhombus-diagonal2", diagonal2);
    let area = areaOfTriangleType(diagonal1, diagonal2);

    displayResult("rhombus-result", "rhombus-area", area);
  });

// Pentagon Area Calculation
document
  .getElementById("pentagon-calculate-btn")
  .addEventListener("click", function () {
    const perimeter = getInputFieldValueById("pentagon-perimeter-field");
    const apothem = getInputFieldValueById("pentagon-apothem-field");

    // number validation
    if(isNaN(perimeter) || isNaN(apothem)){
      alert('Please Input Only Number') ;
      emptyField('pentagon-perimeter-field', 'pentagon-apothem-field') ;
      return ;
    }
    setTextElementValueById("pentagon-perimeter", perimeter);
    setTextElementValueById("pentagon-apothem", apothem);
    let area = areaOfTriangleType(perimeter, apothem);

    displayResult("pentagon-result", "pentagon-area", area);
  });

// Ellipse Area Calculation
document
  .getElementById("ellipse-calculate-btn")
  .addEventListener("click", function () {
    const aAxis = getInputFieldValueById("a-Axis-field");
    const bAxis = getInputFieldValueById("b-Axis-field");

    // number validation
    if(isNaN(aAxis) || isNaN(bAxis)){
      alert('Please Input Only Number') ;
      emptyField('bAxis-field', 'bAxis-field') ;
      return ;
    }

    setTextElementValueById("a-Axis", aAxis);
    setTextElementValueById("b-Axis", bAxis);
    let area = areaOfEllipse(aAxis, bAxis);
    displayResult("ellipse-result", "ellipse-area", area);
  });
