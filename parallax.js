const parallaxContainer = document.querySelector('.parallax-container');
const parallaxItems = parallaxContainer.querySelectorAll('.parallax-item');

let currentIndex = 0;

parallaxItems[currentIndex].classList.add('active');

setInterval(() => {
  parallaxItems[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % parallaxItems.length;
  parallaxItems[currentIndex].classList.add('active');
}, 5000);