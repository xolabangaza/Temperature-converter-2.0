// Function to convert farenheit to celcius
function farenheitToCelcicius(farenheit) {
    let toCelsius = (farenheit- 32)*5/9
    document.write(farenheit +"F"+ " is " +toCelsius+ "C")
};

// Function to convert celcius to farenheit
function celciciusToFarenheit(celcius) {
    let toFarenheit = (celcius* 9/5)+32
    document.write(celcius+"C" + " is "+ toFarenheit +"F")
};

// Prompt the user for input
let temperature = parseFloat(prompt("Enter the temperature:"));
let conversionType = prompt("Choose the conversion type: (celcius to fahrenheit or fahrenheit to celsius)");

if (conversionType.toLowerCase() === "farenheit to celcius") {
    // call the function 
    farenheitToCelcicius(temperature) 
} else if (conversionType.toLowerCase() === "celcius to farenheit") {
// call thefunction
celciciusToFarenheit(temperature)
} else {
    alert("Invalid conversion type.");
}


