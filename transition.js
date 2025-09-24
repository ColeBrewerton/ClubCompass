const welcome = document.getElementById('welcomeScreen');
const clubs = document.getElementById('clubsScreen');

welcome.addEventListener('click', () => {
  // Fade out welcome screen
  welcome.classList.add('fade-out');

  setTimeout(() => {
    // Hide welcome screen
    welcome.style.display = 'none';

    // Show clubs screen with correct flex layout
    clubs.style.display = 'flex';
    clubs.classList.add('fade-in');
  }, 1000); // match fade animation duration
});

// -------------------------
// Drag-to-scroll for kiosk
// -------------------------
const clubsContainer = document.querySelector(".clubs-container");

let isDown = false;
let startX;
let scrollLeft;

clubsContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - clubsContainer.offsetLeft;
  scrollLeft = clubsContainer.scrollLeft;
});

clubsContainer.addEventListener("mouseleave", () => {
  isDown = false;
});

clubsContainer.addEventListener("mouseup", () => {
  isDown = false;
});

clubsContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - clubsContainer.offsetLeft;
  const walk = (x - startX) * 2; // drag speed factor
  clubsContainer.scrollLeft = scrollLeft - walk;
});

// Touch support
clubsContainer.addEventListener("touchstart", (e) => {
  isDown = true;
  startX = e.touches[0].pageX - clubsContainer.offsetLeft;
  scrollLeft = clubsContainer.scrollLeft;
});

clubsContainer.addEventListener("touchend", () => {
  isDown = false;
});

clubsContainer.addEventListener("touchmove", (e) => {
  if (!isDown) return;
  const x = e.touches[0].pageX - clubsContainer.offsetLeft;
  const walk = (x - startX) * 2;
  clubsContainer.scrollLeft = scrollLeft - walk;
});
