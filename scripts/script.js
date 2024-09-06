
const div1 = document.querySelector('#iamkoushik');
const div2 = document.querySelector('.study p');

div1.addEventListener('animationend', () => {
  div2.style.opacity = 1;
});
