// DOM Elements
const buttonSubmit = document.getElementById("btn-submit"); 
const emailInput = document.getElementById('email');
const errorText = document.getElementById('error-text');


buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (emailInput.value === "" || !emailInput.value.includes("@") || !emailInput.value.includes(".")) {
        errorText.classList.add('active');
        emailInput.classList.add('red');
    } else {
        errorText.classList.remove('active');
        emailInput.classList.remove('red');
    }
})


emailInput.addEventListener('input', () => {
    if (emailInput.value !== "" && emailInput.value.includes("@") && emailInput.value.includes(".")) {
        errorText.classList.remove('active');
        emailInput.classList.remove('red');
    }
})