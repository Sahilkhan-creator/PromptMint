// Sidebar & Profile
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');
const profileIcon = document.getElementById('profileIcon');
const profilePanel = document.getElementById('profilePanel');

hamburger.addEventListener('click', () => sidebar.classList.add('active'));
closeSidebar.addEventListener('click', () => sidebar.classList.remove('active'));
profileIcon.addEventListener('click', () => {
  profilePanel.style.display = profilePanel.style.display === 'block' ? 'none' : 'block';
});

// Generate prompt logic
const generateBtn = document.getElementById('generateBtn');
const loading = document.getElementById('loading');
const output = document.getElementById('output');

generateBtn.addEventListener('click', () => {
  const userText = document.getElementById('userPrompt').value;
  const purpose = document.getElementById('promptPurpose').value;

  if(!userText.trim()) {
    output.innerHTML = "<p>Please enter a prompt idea!</p>";
    return;
  }

  loading.style.display = 'block';
  output.innerHTML = '';

  setTimeout(() => {
    loading.style.display = 'none';
    output.innerHTML = `<p><strong>Your generated prompt for ${purpose}:</strong> ${userText} [Enhanced and creative prompt here!]</p>`;
  }, 1500);
});
