// Valores de conversión
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
};

// Función para convertir de euro a dólar
const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs.USD;
};

// Función para convertir de dólar a yen
const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    return valueInEuro * oneEuroIs.JPY;
};

// Función para convertir de yen a libra
const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    return valueInEuro * oneEuroIs.GBP;
};

// Exportamos las funciones
module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};
