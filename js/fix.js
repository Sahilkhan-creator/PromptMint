const fixBtn = document.getElementById('fixBtn');
const badPrompt = document.getElementById('badPrompt');
const fixedOutput = document.getElementById('fixedOutput');

fixBtn.addEventListener('click', () => {
  let credits = parseInt(localStorage.getItem('credits') || '25');
  if (credits < 1) {
    alert("You don’t have enough credits! Watch an ad or upgrade your plan.");
    return;
  }

  credits -= 1;
  localStorage.setItem('credits', credits);
  document.getElementById('creditsDisplay').textContent = credits;

  const fixedPrompt = `Optimized prompt: ${badPrompt.value} (improved for AI image generation)`;
  fixedOutput.value = fixedPrompt;
});￼Enter
