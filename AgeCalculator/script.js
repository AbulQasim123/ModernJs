let currDate = document.querySelector('#currDate');
let DOB = document.querySelector('#DOB');
const CalcAge = document.querySelector('#CalcAge');
const displayAge = document.querySelector('#displayAge');
const Age = document.querySelector('#age');
const error = document.querySelector('#error');

let today = new Date();
currDate.innerText = `Today's Date is ${today.toLocaleDateString()}`;

CalcAge.addEventListener('click', (e) => {
    e.preventDefault();
    let input = DOB.value;
    if (input === '') {
        error.innerText = 'Please enter your date of birth';
        Age.innerText = '';
        error.innerText = '';
        return;
    }

    // Convert input to a Date object
    let inputDate = new Date(input);

    // Check if input is a valid date
    if (isNaN(inputDate.getTime())) {
        error.innerText = 'Please enter a valid date of birth';
        error.style.color = 'white';
        Age.innerText = '';
        return;
    }

    // Get today's date
    let today = new Date();

    // Check if input is in the future
    if (inputDate > today) {
        error.innerText = 'Please enter a date of birth that is not in the future';
        error.style.color = 'white';
        Age.innerText = '';
        return;
    }

    // Check if input is before January 1, 1900
    const minDate = new Date('1900-01-01');
    if (inputDate < minDate) {
        error.innerText = 'Please enter a date of birth after January 1, 1900';
        error.style.color = 'white';
        Age.innerText = '';
        return;
    }

    // Calculate age
    let year = today.getFullYear() - inputDate.getFullYear();
    let month = today.getMonth() - inputDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < inputDate.getDate())) {
        year = year - 1;
    }
    
    // Display age
    displayAge.style.visibility = 'visible';
    Age.innerText = `You are ${year} years old.`;

    // Reset input and error message
    DOB.value = '';
    error.innerText = '';
});