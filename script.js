//importing variables
const container = document.querySelector('.container');
const pyramid = document.querySelector('.pyramid');
const row = document.querySelector('.row');
const form = document.querySelector('.pyrForm');
const pyrText = document.getElementById('pyrText');
const pyrLength = document.getElementById('pyrLength');
const submitButton = document.getElementById('pyrSubmit'); 

console.log(container);
console.log(pyramid);
console.log(row);
console.log(form);
console.log(pyrText);
console.log(pyrLength);
console.log(submitButton);


//Function #1
let character;
const rows = [];
let counter;



//Submiting form and getting values
form.addEventListener('submit', function(e){
    e.preventDefault();

    character = pyrText.value.trim();
    counter = pyrLength.value;

    console.log(character);
    console.log(counter);

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

})



