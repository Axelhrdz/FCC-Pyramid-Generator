//importing variables
const container = document.querySelector('.container');
const pyramid = document.querySelector('.pyramid');
const row = document.querySelector('.row');

console.log(container);
console.log(pyramid);
console.log(row);


//Function #1
const character = '#';
const rows = [];
const counter = 20;

function creatingRows(counter){
    for(let i = 0; i < counter; i++){
        rows.push(i+1);
    }
}
creatingRows(counter);
console.log(rows);



//login characters in console function
function loginCharacters(array, char){
    for(let i = 0; i < array.length; i++){
        let rowContent =  document.createElement('li');
        rowContent.classList.add('row');

        rowContent.textContent = ' '.repeat(array.length - array[i]) + char.repeat(array[i] * 2 - 1);
        pyramid.appendChild(rowContent);

        console.log(rowContent);
    }
}

loginCharacters(rows, character);
