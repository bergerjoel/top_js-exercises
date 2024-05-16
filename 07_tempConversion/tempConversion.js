const convertToCelsius = function (fahrenheit) {
  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

// Testing it using coderunner;
console.log(convertToCelsius(66));

const convertToFahrenheit = function (celsius) {
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};

// Testing it using coderunner;
console.log(convertToFahrenheit(30));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
