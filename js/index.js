// Sidebar
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

hamburger.addEventListener('click', () => {
  sidebar.classList.add('active');
});

closeSidebar.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

// Profile
const profileIcon = document.getElementById('profileIcon');
const profilePanel = document.getElementById('profilePanel');

profileIcon.addEventListener('click', () => {
  profilePanel.style.display = profilePanel.style.display === 'block' ? 'none' : 'block';
});

// Close sidebar if click outside
window.addEventListener('click', (e) => {
  if (e.target === sidebar) sidebar.classList.remove('active');
});
