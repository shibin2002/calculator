

function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    const currentValue = display.value;

    if (currentValue && !isNaN(currentValue[currentValue.length - 1])) {
        display.value += operator;
    }
}
function backspace() {
    display.value = display.value.slice(0, -1);
}
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
