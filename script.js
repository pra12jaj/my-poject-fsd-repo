// script.js

document.addEventListener('DOMContentLoaded', function() {
    const myButton = document.getElementById('myButton');
    const message = document.getElementById('message');
    const output = document.getElementById('output');

    myButton.addEventListener('click', function() {
        message.textContent = 'Button Clicked!';
        output.textContent = 'Button Clicked at: ' + new Date().toLocaleTimeString();
    });
});