// Todays forecast in Kelvin
const kelvin = 293;
// conversion from kelvin to celsius
const celsius = kelvin - 273;
// conversion from celsius to fahrenheit
let fahrenheit = (celsius * (9 / 5) + 32);
//rounds the number down
fahrenheit = (Math.floor(fahrenheit));
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit;`)