// ===== SIDEBAR / HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

hamburger.addEventListener('click', () => {
  sidebar.classList.add('active');
});

closeSidebar.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

// ===== PROFILE POPUP =====
const profileBtn = document.getElementById('profileBtn');
const profilePopup = document.getElementById('profilePopup');

profileBtn.addEventListener('click', () => {
  profilePopup.style.display = profilePopup.style.display === 'block' ? 'none' : 'block';
});

// Click outside profile popup to close it
window.addEventListener('click', (e) => {
  if (!profilePopup.contains(e.target) && e.target !== profileBtn) {
    profilePopup.style.display = 'none';
  }
});

// ===== LOGOUT BUTTON =====
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', () => {
  alert("Logged out successfully!");
  // For now, just reload page
  window.location.reload();
});
