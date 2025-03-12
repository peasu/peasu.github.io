// Confetti on Page Load
document.addEventListener('DOMContentLoaded', () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });

  // Set countdown timer
  setCountdown();
});

// Confetti on Cat Click
const cat = document.querySelector('.cat');
cat.addEventListener('click', () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });

  alert('Meow! 🐾 You’re the best!');
});

// Countdown Timer
function setCountdown() {
  const countdownDate = new Date('2023-12-31T00:00:00').getTime(); // Set your target date here

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');

    if (distance < 0) {
      clearInterval(timer);
      document.querySelector('.countdown-timer').innerHTML = 'Time\'s up! 🎉';
    }
  }, 1000);
}

// Flower Animation
function playFlowerAnimation() {
  const flowerAnimation = document.getElementById('flower-animation');

  // Load the Lottie animation
  flowerAnimation.innerHTML = `
    <lottie-player
      src="https://assets10.lottiefiles.com/packages/lf20_8wRE4I.json"
      background="transparent"
      speed="1"
      style="width: 200px; height: 200px;"
      autoplay
    ></lottie-player>
  `;

  // Show the animation
  flowerAnimation.style.opacity = '1';

  // Hide the animation after it finishes
  setTimeout(() => {
    flowerAnimation.style.opacity = '0';
    flowerAnimation.innerHTML = ''; // Clear the animation
  }, 3000); // Adjust timing based on the animation length
}