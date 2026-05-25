const display = document.getElementById("display");


// APPEND VALUES
function appendToDisplay(input) {
    display.value += input;
}


// CLEAR DISPLAY
function clearDisplay() {
    display.value = "";
}


// DELETE LAST CHARACTER
function deleteLast() {
    display.value = display.value.slice(0, -1);
}


// CONVERT DEGREES TO RADIANS
function toRadians(value) {
    return value * (Math.PI / 180);
}


// SIN BUTTON
function sin() {
    display.value += "sin(";
}


// COS BUTTON
function cos() {
    display.value += "cos(";
}


// TAN BUTTON
function tan() {
    display.value += "tan(";
}


// HISTORY ARRAY
let history = [];


// ADD TO HISTORY
function addToHistory(expression, result) {

    history.push(expression + " = " + result);

    updateHistory();
}


// UPDATE HISTORY DISPLAY
function updateHistory() {

    const historyBox = document.getElementById("history");

    historyBox.innerHTML = "";

    history.forEach(item => {

        let div = document.createElement("div");

        div.innerText = item;

        historyBox.appendChild(div);
    });
}


// SHOW / HIDE HISTORY
function toggleHistory() {

    const historyBox = document.getElementById("history");

    if (
        historyBox.style.display === "none" ||
        historyBox.style.display === ""
    ) {

        historyBox.style.display = "block";

    } else {

        historyBox.style.display = "none";
    }
}


// MAIN CALCULATE FUNCTION
function calculate() {

    try {

        let originalExpression = display.value;

        let expression = display.value;


        // SIN
        expression = expression.replace(
            /sin\(([^)]+)\)/g,
            "Math.sin(($1) * Math.PI / 180)"
        );


        // COS
        expression = expression.replace(
            /cos\(([^)]+)\)/g,
            "Math.cos(($1) * Math.PI / 180)"
        );


        // TAN
        expression = expression.replace(
            /tan\(([^)]+)\)/g,
            "Math.tan(($1) * Math.PI / 180)"
        );


        let result = eval(expression);

        result = Number(result.toFixed(4));


        // ADD TO HISTORY
        addToHistory(originalExpression, result);


        // SHOW RESULT
        display.value = result;

    } catch {

        display.value = "Error";
    }
}