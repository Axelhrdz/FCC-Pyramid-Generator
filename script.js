//importing variables
const pyramidContainer = document.querySelector('.pyramidContainer');
console.log(pyramidContainer);

//Function #1
const character = '#';
const rows = [];
const counter = 8;

function creatingRows(counter){
    for(let i = 0; i < counter; i++){
        
        rows.push(i+1);
        console.log(i);
    }
}
creatingRows(counter);
console.log(rows);

//login characters in console function
