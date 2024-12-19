// fahrenheit to celsius
const convertToCelsius = function(num) {
  let conversion = 0;
  conversion = (num - 32) * (5/9)
  return Math.round(conversion * 10) /10;
};

// celsius to fahrenheit
const convertToFahrenheit = function(num) {
  let conversion = 0;
  conversion = (num * (9/5) + 32);
  return Math.round(conversion * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
