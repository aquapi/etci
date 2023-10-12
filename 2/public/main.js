/** @type {HTMLInputElement} */
const input = document.getElementById('select-color'),
    currentColor = document.getElementById('current-color');

document
    .getElementById('test-color')
    .addEventListener('submit', e => {
        e.preventDefault();

        document.body.style = 'background-color:' + input.value;
        currentColor.style = 'color:' + input.value;
        currentColor.innerHTML = input.value;
    });
