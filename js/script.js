// JS for Logic, CSS for Animation
const button = document.getElementById('button');
let blocky = document.getElementsByClassName('blocky');

const move = () => {
  for (var i = 0; i < blocky.length; i++) {
      blocky[i].classList.toggle('blocky--move-out');
  }
}

button.addEventListener('click', move);
