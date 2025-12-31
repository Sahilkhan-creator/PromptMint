// Sidebar & Profile
const hamburgerFix = document.getElementById('hamburger');
const sidebarFix = document.getElementById('sidebar');
const closeSidebarFix = document.getElementById('closeSidebar');
const profileIconFix = document.getElementById('profileIcon');
const profilePanelFix = document.getElementById('profilePanel');

hamburgerFix.addEventListener('click', () => sidebarFix.classList.add('active'));
closeSidebarFix.addEventListener('click', () => sidebarFix.classList.remove('active'));
profileIconFix.addEventListener('click', () => {
  profilePanelFix.style.display = profilePanelFix.style.display === 'block' ? 'none' : 'block';
});

// Fix prompt logic
const fixBtn = document.getElementById('fixBtn');
const loadingFix = document.getElementById('loadingFix');
const outputFix = document.getElementById('outputFix');

fixBtn.addEventListener('click', () => {
  const userText = document.getElementById('userFixPrompt').value;

  if(!userText.trim()) {
    outputFix.innerHTML = "<p>Please enter your prompt to fix!</p>";
    return;
  }

  loadingFix.style.display = 'block';
  outputFix.innerHTML = '';

  setTimeout(() => {
    loadingFix.style.display = 'none';
    outputFix.innerHTML = `<p><strong>Fixed Prompt:</strong> ${userText} [Improved and polished prompt here!]</p>`;
  }, 1500);
});
