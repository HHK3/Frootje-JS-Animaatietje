const button = document.getElementById('button');
let square = document.getElementsByClassName('square');

const slideout = () => {
  for (var i = 0; i < square.length; i++) {
      square[i].classList.toggle('square--slideout');
      square[i].style.animationDelay = "3s";
  }
}

button.addEventListener('click', slideout);
