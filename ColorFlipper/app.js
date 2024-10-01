const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const colorButton = document.getElementById('btn');
const colorSelector = document.querySelector('.color');
const backgroundColorSelector = document.body.style;
const ColorId = document.querySelector('span');


function changeColor(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomBgColor = colors[randomNumber];
    ColorId.textContent = randomBgColor;
    backgroundColorSelector.backgroundColor = randomBgColor;
}



colorButton.addEventListener('click',changeColor);
