// Get elements
const generateBtn = document.getElementById('generateBtn');
const userPrompt = document.getElementById('userPrompt');
const purposeSelect = document.getElementById('purpose');
const typeSelect = document.getElementById('type');
const modelSelect = document.getElementById('model');
const outputArea = document.getElementById('outputPrompt');

generateBtn.addEventListener('click', () => {
    const prompt = userPrompt.value.trim();
    const purpose = purposeSelect.value;
    const type = typeSelect.value;
    const model = modelSelect.value;

    if (!prompt) {
        outputArea.value = "Please enter your image idea or bad prompt.";
        return;
    }

    // Create a generated prompt
    const generatedPrompt = `Prompt for ${model} | Purpose: ${purpose} | Type: ${type} | Idea: ${prompt}`;
    outputArea.value = generatedPrompt;
});
