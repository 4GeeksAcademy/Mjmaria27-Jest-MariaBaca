// Importamos las funciones desde app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    expect(fromEuroToDollar(3.5)).toBeCloseTo(3.745);
});

test("One dollar should be 146.26 yenes", function() {
    expect(fromDollarToYen(1)).toBeCloseTo(146.26);
});

test("One yen should be 0.00556 pounds", function() {
    expect(fromYenToPound(1)).toBeCloseTo(0.00556);
});
