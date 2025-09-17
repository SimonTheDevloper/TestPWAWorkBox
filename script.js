function umrechnen() {
    // Eingabewert aus dem Textfeld holen
    let input = document.getElementById("celsiusInput").value;
    let numberInput = parseFloat(input); // Umwandeln in Zahl

    // Überprüfen, ob die Eingabe gültig ist
    if (isNaN(numberInput)) {
        document.getElementById("result").innerHTML = '<span class="error">Bitte gib eine gültige Zahl ein!</span>';
    } else {
        let result = celsiusToFahrenheit(numberInput);
        document.getElementById("result").innerHTML = input + " Grad Celsius sind " + result + " Grad Fahrenheit.";
    }
}

function celsiusToFahrenheit(x) {
    return x * (9 / 5) + 32;
}
