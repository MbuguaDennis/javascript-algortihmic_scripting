// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
// #problem1:

function myTemperature(celsius){
    // define temperature in fahrenheit
    let fahrenheit = celsius *(9/5) +32;
    console.log(typeof fahrenheit);
    return fahrenheit;

}