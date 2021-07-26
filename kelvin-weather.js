const kelvin = 400;
// this is the temperature in kelvin

const celsius = kelvin - 273
// this is the temperature in celsius

let fahrenheit = celsius * (9/5) + 32
//this is the temperature in fahreinheit
fahrenheit = Math.floor (fahrenheit)
//this is the whole number form of the fahrenheit value

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)

let newton = celsius * (33/100)
newton = Math.floor(newton)

console.log(`The temperature is ${newton} degrees Newton`)