const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");

window.addEventListener("load", () => celsius.focus());

celsius.addEventListener("input", () => {
    const celsiusValue = parseFloat(celsius.value);  // Convert input to a number
    if (isNaN(celsiusValue)) {
        fahrenheit.value = "";  // If the input is not a number, clear the output
    } else {
        fahrenheit.value = ((celsiusValue * 9) / 5 + 32).toFixed(2);
    }
});

fahrenheit.addEventListener("input", () => {
    const fahrenheitValue = parseFloat(fahrenheit.value);  // Convert input to a number
    if (isNaN(fahrenheitValue)) {
        celsius.value = "";  // If the input is not a number, clear the output
    } else {
        celsius.value = (((fahrenheitValue - 32) * 5) / 9).toFixed(2);
    }
});
