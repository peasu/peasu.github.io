// Confetti on Page Load
document.addEventListener('DOMContentLoaded', () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
});

// Confetti on Cat Click
const cat = document.querySelector('.cat');
cat.addEventListener('click', () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
});