function triangleTypeFormula(b, h) {
  let area = 0.5 * b * h;
  area = area.toFixed(2);
  return area;
}

function rectangularTypeFormula(w, l) {
  let area = w * l;
  area = area.toFixed(2);
  return area;
}

function areaOfEllipse(a, b) {
  const pi = 3.1416;
  let area = pi * a * b;
  area = area.toFixed(2);
  return area;
}
