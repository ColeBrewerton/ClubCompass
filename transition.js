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
