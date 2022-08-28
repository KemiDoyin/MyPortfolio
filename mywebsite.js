const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav-link');
const navButtons = document.querySelectorAll('li');
console.log(navButtons);
hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});
navButtons.forEach(element => {
  element.addEventListener('click', () => {
    navLink.classList.toggle('hide');
  });
});

