// MENU TOGGLE
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const closeSidebar = document.querySelector('.close-sidebar');

menuToggle?.addEventListener('click', () => {
  sidebar?.classList.add('open');
});

closeSidebar?.addEventListener('click', () => {
  sidebar?.classList.remove('open');
});

// PROFILE TOGGLE
const profileToggle = document.querySelector('.profile-toggle');
const profileSidebar = document.querySelector('.profile-sidebar');
const closeProfile = document.querySelector('.close-profile');

profileToggle?.addEventListener('click', () => {
  profileSidebar?.classList.add('open');
});

closeProfile?.addEventListener('click', () => {
  profileSidebar?.classList.remove('open');
});

// Close sidebar or profile if clicked outside
document.addEventListener('click', (e) => {
  if (!sidebar?.contains(e.target) && !menuToggle?.contains(e.target)) {
    sidebar?.classList.remove('open');
  }
  if (!profileSidebar?.contains(e.target) && !profileToggle?.contains(e.target)) {
    profileSidebar?.classList.remove('open');
  }
});
