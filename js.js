function redColor() {
  document.body.style.backgroundColor = "red";
}

function showText() {
  document.body.style.backgroundColor = "white";
}

let makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = 'blue';
}

// let makePurple = document.getElementById('purple');
// document.onclick = function  () {
//     document.body.style.backgroundColor = 'purple'
// }

let pinkcolor = document.getElementById('make-pink');
pinkcolor.addEventListener('click', colorPink);
function colorPink () {
    document.body.style.backgroundColor = 'pink';
}

let makeGreen = document.getElementById('make-green')
makeGreen.addEventListener('click', function green() {
    document.body.style.backgroundColor = 'green';
})