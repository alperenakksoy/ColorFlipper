const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const backgroundColorCode = document.querySelector('.color');
const backgroundColor = document.body.style;
const colorCodes = [];
const colorString = [];


function getRandomColorCode() {

    for(var i = 0;i<6;i++){
        const rn = Math.floor(Math.random()*hex.length); 
        colorCodes.push(hex[rn]);
    }

}

 function codeToString(){
    getRandomColorCode();
   const stringCode = colorCodes.join('');

   backgroundColorCode.textContent = stringCode;
   backgroundColor.backgroundColor = '#'+stringCode;
   colorCodes.length = 0;
}


btn.addEventListener('click',codeToString);
