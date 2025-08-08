document.addEventListener("DOMContentLoaded", () => {
  const stats = document.querySelectorAll(".stat-number");

  stats.forEach(stat => {
    const target = +stat.getAttribute("data-target");
    let count = 0;
    const speed = target / 200; // adjust speed

    const updateCount = () => {
      if (count < target) {
        count += speed;
        stat.textContent = Math.floor(count);
        requestAnimationFrame(updateCount);
      } else {
        stat.textContent = target;
      }
    };

    updateCount();
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const music = document.getElementById('bg-music');

  function startMusic() {
    music.play().catch(err => console.log("Autoplay blocked:", err));
    document.removeEventListener('click', startMusic);
    document.removeEventListener('touchstart', startMusic);
  }

  document.addEventListener('click', startMusic);
  document.addEventListener('touchstart', startMusic);
});