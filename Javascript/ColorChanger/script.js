const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body');
// console.log(buttons);
buttons.forEach(function (button){
    // console.log(button);
    button.addEventListener('click', function (e){
        // console.log(e);
        // console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = 'grey';
        }
        if(e.target.id === 'pink'){
            body.style.backgroundColor = 'pink';
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow';
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue';
        }
    })
})

// const userFavColor = prompt("What is your favorite color?");
// body.style.backgroundColor = `${userFavColor}`;