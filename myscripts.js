function getInputValue() {
    let input = document.getElementById('input');
    console.log(input.value);
    let output = document.getElementById('output');
    output.textContent = input.value;
}