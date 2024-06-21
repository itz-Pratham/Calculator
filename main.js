let display = document.getElementById('display');

function calculateResult() {
    try {
        display.value = eval(display.value);
        if (isNaN(display.value) || display.value == 'Infinity') {
            display.value = 'INVALID';
        }
    } catch (error) {
        display.value = 'INVALID';
    }
}