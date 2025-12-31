const generateBtn = document.getElementById('generateBtn');
const output = document.getElementById('output');
const userInput = document.getElementById('userInput');
const styleSelect = document.getElementById('styleSelect');
const platformSelect = document.getElementById('platformSelect');
const qualitySelect = document.getElementById('qualitySelect');

generateBtn.addEventListener('click', () => {
  let credits = parseInt(localStorage.getItem('credits') || '25');
  if (credits < 1) {
    alert("You don’t have enough credits! Watch an ad or upgrade your plan.");
    return;
  }

  credits -= 1;
  localStorage.setItem('credits', credits);
  document.getElementById('creditsDisplay').textContent = credits;

  const prompt = `Create a ${qualitySelect.value} ${styleSelect.value} image on ${platformSelect.value} about "${userInput.value}"`;
  output.value = prompt;
});￼Enter
