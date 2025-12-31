// Get elements
const fixBtn = document.getElementById('fixBtn');
const badPrompt = document.getElementById('badPrompt');
const fixPurpose = document.getElementById('fixPurpose');
const fixType = document.getElementById('fixType');
const fixModel = document.getElementById('fixModel');
const fixedOutput = document.getElementById('fixedPrompt');

fixBtn.addEventListener('click', () => {
    const prompt = badPrompt.value.trim();
    const purpose = fixPurpose.value;
    const type = fixType.value;
    const model = fixModel.value;

    if (!prompt) {
        fixedOutput.value = "Please enter a prompt to fix.";
        return;
    }

    // Create a fixed prompt
    const fixedPrompt = `Fixed Prompt for ${model} | Purpose: ${purpose} | Type: ${type} | Original Idea: ${prompt}`;
    fixedOutput.value = fixedPrompt;
});
