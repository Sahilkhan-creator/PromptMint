// Sidebar toggle
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// Profile panel toggle
const profileIcon = document.getElementById('profileIcon');
const profilePanel = document.getElementById('profilePanel');

profileIcon.addEventListener('click', () => {
    profilePanel.classList.toggle('active');
});

// Ensure buttons always navigate (fix JS interference)
document.querySelectorAll('.hero-buttons a').forEach(btn => {
    btn.addEventListener('click', e => {
        // Remove preventDefault if present
        window.location.href = btn.getAttribute('href');
    });
});
