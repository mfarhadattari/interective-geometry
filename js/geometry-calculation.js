// Triangular Area Calculation
document
  .getElementById("triangle-calculate-btn")
  .addEventListener("click", function () {
    const base = getInputFieldValueById("triangle-base-field");
    const hight = getInputFieldValueById("triangle-hight-field");
    
    emptyField("triangle-base-field", "triangle-hight-field");

    // number validation
    if (isNaN(base) || isNaN(hight)) {
      alert("Please Input Only Number");
      return;
    }
    // negative number validation
    else if (base < 0 || hight < 0) {
      alert("Please Input Positive Value");
      return;
    }


    setTextElementValueById("triangle-base", base);
    setTextElementValueById("triangle-hight", hight);
    let area = areaOfTriangleType(base, hight);
    displayResult("triangle-result", "triangle-area", area);

    convertCmUnite("triangle-unite");
    btnShow("triangle-meter-covert-btn");
  });

// Rectangular Area Calculation
document
  .getElementById("rectangle-calculate-btn")
  .addEventListener("click", function () {
    const width = getInputFieldValueById("rectangle-width-field");
    const length = getInputFieldValueById("rectangle-length-field");

    emptyField("rectangle-width-field", "rectangle-length-field");

    // number validation
    if (isNaN(width) || isNaN(length)) {
      alert("Please Input Only Number");
      return;
    }

    // negative number validation
    else if (width < 0 || length < 0) {
      alert("Please Input Positive Value");
      return;
    }


    setTextElementValueById("rectangle-width", width);
    setTextElementValueById("rectangle-length", length);
    let area = areaOfRectangularType(width, length);

    displayResult("rectangle-result", "rectangle-area", area);

    convertCmUnite("rectangle-unite");
    btnShow("rectangle-meter-covert-btn");
  });

// Parallelogram Area Calculation
document
  .getElementById("parallelogram-calculate-btn")
  .addEventListener("click", function () {
    const width = getInputFieldValueById("parallelogram-width-field");
    const hight = getInputFieldValueById("parallelogram-hight-field");

    emptyField("parallelogram-width-field", "parallelogram-hight-field");

    // number validation
    if (isNaN(width) || isNaN(hight)) {
      alert("Please Input Only Number");
      return;
    }
    // negative number validation
    else if (width < 0 || hight < 0) {
      alert("Please Input Positive Value");
      return;
    }

    setTextElementValueById("parallelogram-width", width);
    setTextElementValueById("parallelogram-hight", hight);
    let area = areaOfRectangularType(width, hight);

    displayResult("parallelogram-result", "parallelogram-area", area);

    convertCmUnite("parallelogram-unite");
    btnShow("parallelogram-meter-covert-btn");
  });

// Rhombus Area Calculation
document
  .getElementById("rhombus-calculate-btn")
  .addEventListener("click", function () {
    const diagonal1 = getInputFieldValueById("rhombus-diagonal1-field");
    const diagonal2 = getInputFieldValueById("rhombus-diagonal2-field");

    emptyField("rhombus-diagonal1-field", "rhombus-diagonal2-field");

    // number validation
    if (isNaN(diagonal1) || isNaN(diagonal2)) {
      alert("Please Input Only Number");
      return;
    }

    // negative number validation
    else if (diagonal1 < 0 || diagonal1 < 0) {
      alert("Please Input Positive Value");
      return;
    }

    setTextElementValueById("rhombus-diagonal1", diagonal1);
    setTextElementValueById("rhombus-diagonal2", diagonal2);
    let area = areaOfTriangleType(diagonal1, diagonal2);

    displayResult("rhombus-result", "rhombus-area", area);

    convertCmUnite("rhombus-unite");
    btnShow("rhombus-meter-covert-btn");
  });

// Pentagon Area Calculation
document
  .getElementById("pentagon-calculate-btn")
  .addEventListener("click", function () {
    const perimeter = getInputFieldValueById("pentagon-perimeter-field");
    const apothem = getInputFieldValueById("pentagon-apothem-field");
    
    emptyField("pentagon-perimeter-field", "pentagon-apothem-field");

    // number validation
    if (isNaN(perimeter) || isNaN(apothem)) {
      alert("Please Input Only Number");
      return;
    }

    // negative number validation
    else if (perimeter < 0 || apothem < 0) {
      alert("Please Input Positive Value");
      return;
    }

    setTextElementValueById("pentagon-perimeter", perimeter);
    setTextElementValueById("pentagon-apothem", apothem);
    let area = areaOfTriangleType(perimeter, apothem);

    displayResult("pentagon-result", "pentagon-area", area);

    convertCmUnite("pentagon-unite");
    btnShow("pentagon-meter-covert-btn");
  });

// Ellipse Area Calculation
document
  .getElementById("ellipse-calculate-btn")
  .addEventListener("click", function () {
    const aAxis = getInputFieldValueById("a-Axis-field");
    const bAxis = getInputFieldValueById("b-Axis-field");

    emptyField("a-Axis-field", "b-Axis-field");

    // number validation
    if (isNaN(aAxis) || isNaN(bAxis)) {
      alert("Please Input Only Number");
      return;
    }

    // negative number validation
    else if (aAxis < 0 || bAxis < 0) {
      alert("Please Input Positive Value");
      return;
    }

    setTextElementValueById("a-Axis", aAxis);
    setTextElementValueById("b-Axis", bAxis);
    let area = areaOfEllipse(aAxis, bAxis);

    displayResult("ellipse-result", "ellipse-area", area);

    convertCmUnite("ellipse-unite");
    btnShow("ellipse-meter-covert-btn");
  });
