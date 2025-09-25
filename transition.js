const welcome = document.getElementById('welcomeScreen');
const clubs = document.getElementById('clubsScreen');

// Function to show clubs page immediately
function showClubsPage() {
  welcome.style.display = 'none';
  clubs.style.display = 'flex';
  clubs.classList.add('fade-in');
}

// Check if user clicked back
if (sessionStorage.getItem("skipWelcome") === "true") {
  showClubsPage();
  sessionStorage.removeItem("skipWelcome");
} else {
  // Normal welcome screen click
  welcome.addEventListener('click', () => {
    // Fade out welcome screen
    welcome.classList.add('fade-out');

    setTimeout(() => {
      showClubsPage();
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
