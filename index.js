const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    /* document.body is used to target the body */
    // console.log(document.body);

    // get random number between 0 - 3.  Why 3? since indexing array starts from 0 and size of array is 4
    /* accessing the first color colors[0] */
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);  
}



/* 

   Math.random() gives the decimal number between 0 to 1 

   If we multiply the Math.random() with length of the colors array we will get the decimal numbers 
   in between range 0 to 4
//    the decimal number is never be 4.0 because the values of Math.random() are in between 0 to 1 not 1.0

   Math.floor() it is going the round of the decimal to the closest integer. It is going to round off always down.

   Math.floor(1.590) -> 1
   Math.floor(0.909) -> 0


*/