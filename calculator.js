// Addition
function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }

    return a / b;
}

// Main calculator function
function calculate() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let operator = document.getElementById("operator").value;

    let result;

    // Validation
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerHTML =
            "Please enter both numbers.";
        return;
    }

    // Switch statement
    switch (operator) {

        case "+":
            result = add(num1, num2);
            break;

        case "-":
            result = subtract(num1, num2);
            break;

        case "*":
            result = multiply(num1, num2);
            break;

        case "/":
            result = divide(num1, num2);
            break;

        default:
            result = "Invalid operator";
    }

    document.getElementById("result").innerHTML =
        "Result: " + result;
}

// Clear calculator
function clearCalculator() {

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

    document.getElementById("result").innerHTML =
        "Result: ";
}