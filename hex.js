const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

/* Generating the Random Hex Color
   Hex color consists of # and 6 values

   values could be from [0, 9] and letters 
   A -> 10
   B -> 11
   C -> 12
   D -> 13
   E -> 14
   F -> 15

   e.g #f15025
 */

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    
    /* the first character of any hex value starts from # */
    let hexColor = "#";

    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

});

/* Function to set up the random 6 values of the hexColor  */
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

