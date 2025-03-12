document.addEventListener('DOMContentLoaded', () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });

  setCountdown();
});

const cat = document.querySelector('.cat');
cat.addEventListener('click', () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });

});

function setCountdown() {
  const countdownDate = new Date('2025-04-07T00:00:00').getTime();

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

function playFlowerAnimation() {
  const container = document.getElementById('flower-animation-container');

  for (let i = 0; i < 3; i++) {
    const flower = document.createElement('video');
    flower.src = 'videos/floweranimation.webm';
    flower.classList.add('flower-animation');
    flower.autoplay = true;
    flower.loop = false;

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    flower.style.left = `${x}px`;
    flower.style.top = `${y}px`;

    container.appendChild(flower);

    flower.addEventListener('ended', () => {
      flower.remove();
    });
  }
}