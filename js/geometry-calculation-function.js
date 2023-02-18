// Triangle type formula for : Triangle , Rhombus , Pentagon;
function areaOfTriangleType(b, h) {
  let area = 0.5 * b * h;
  area = area.toFixed(2);
  return area;
}

// Rectangular Type Formula for Rectangular and Parallelogram 
function areaOfRectangularType(w, l) {
  let area = w * l;
  area = area.toFixed(2);
  return area;
}

// Ellipse Function
function areaOfEllipse(a, b) {
  const pi = 3.1416;
  let area = pi * a * b;
  area = area.toFixed(2);
  return area;
}
