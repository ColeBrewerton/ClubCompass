const welcome = document.getElementById('welcomeScreen');
const clubs = document.getElementById('clubsScreen');

// Function to show clubs page immediately
function showClubsPage(animate = true) {
  welcome.style.display = 'none';
  clubs.style.display = 'flex';

  if (animate) {
    clubs.classList.add('fade-in');
  } else {
    clubs.classList.remove('fade-in'); // Ensure no animation
  }
}

// Check if user clicked back
if (sessionStorage.getItem("skipWelcome") === "true") {
  showClubsPage(false); // skip animation
  sessionStorage.removeItem("skipWelcome");
} else {
  // Normal welcome screen click
  welcome.addEventListener('click', () => {
    welcome.classList.add('fade-out');

    setTimeout(() => {
      showClubsPage(); // default: animate
    }, 1000); // match fade animation duration
  });
}


// Club card interactions
document.querySelectorAll('.club-card').forEach(card => {
  // Click on card (not button) -> info page
  card.addEventListener('click', (e) => {
    if (!e.target.classList.contains('club-button')) {
      window.location.href = card.dataset.info;
    }
  });

  // Click on button -> map page
  const button = card.querySelector('.club-button');
  button.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent card click
    window.location.href = card.dataset.map;
  });
});
