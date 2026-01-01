/* ===============================
   PromptMint – Fix Engine
   =============================== */

/* ---------- Schema ---------- */
function createEmptyPrompt() {
  return {
    subject: [],
    environment: [],
    action: [],
    style: [],
    lighting: [],
    technical: [],
    negative: [],
    meta: {
      mode: "strict", // strict | creative
      detailLevel: "normal"
    }
  };
}

/* ---------- Cached keyword sets ---------- */
const STYLE_KEYWORDS = [
  "cinematic", "anime", "photorealistic", "oil painting",
  "watercolor", "digital art", "pixel art", "illustration"
];

const LIGHTING_KEYWORDS = [
  "studio lighting", "soft light", "dramatic light",
  "neon lighting", "golden hour", "low light", "moody lighting"
];

const ENV_KEYWORDS = [
  "studio", "street", "forest", "room", "city",
  "background", "landscape", "indoor", "outdoor"
];

const ACTION_KEYWORDS = [
  "standing", "sitting", "running", "looking",
  "walking", "jumping", "portrait"
];

const CONFLICTS = [
  ["anime", "photorealistic"],
  ["pixel art", "realistic"],
  ["studio background", "crowded street"]
];

/* ---------- Step 1: classify ---------- */
function classifyPrompt(input) {
  const prompt = createEmptyPrompt();
  const parts = input.toLowerCase().split(",");

  parts.forEach(p => {
    const word = p.trim();
    if (!word) return;

    if (STYLE_KEYWORDS.some(k => word.includes(k))) {
      prompt.style.push(word);
    } else if (LIGHTING_KEYWORDS.some(k => word.includes(k))) {
      prompt.lighting.push(word);
    } else if (ENV_KEYWORDS.some(k => word.includes(k))) {
      prompt.environment.push(word);
    } else if (ACTION_KEYWORDS.some(k => word.includes(k))) {
      prompt.action.push(word);
    } else {
      prompt.subject.push(word);
    }
  });

  return prompt;
}

/* ---------- Step 2: conflict & dedupe ---------- */
function resolveConflicts(prompt) {
  CONFLICTS.forEach(([a, b]) => {
    if (prompt.style.includes(a) && prompt.style.includes(b)) {
      prompt.style = [a]; // keep primary
    }
  });

  Object.keys(prompt).forEach(k => {
    if (Array.isArray(prompt[k])) {
      prompt[k] = [...new Set(prompt[k])];
    }
  });
}

/* ---------- Step 3: defaults & intelligence ---------- */
function applyDefaults(prompt) {
  if (!prompt.lighting.length) {
    prompt.lighting.push("soft studio lighting");
  }

  if (!prompt.environment.length) {
    prompt.environment.push("clean studio background");
  }

  if (!prompt.action.length) {
    prompt.action.push("natural pose");
  }

  if (!prompt.technical.length) {
    prompt.technical.push("high detail", "sharp focus");
  }

  prompt.negative.push(
    "extra limbs",
    "deformed face",
    "distortion",
    "watermark",
    "low quality"
  );
}

/* ---------- Step 4: render ---------- */
function renderPrompt(prompt) {
  return `
${prompt.subject.join(", ")}
${prompt.action.join(", ")}

Environment: ${prompt.environment.join(", ")}
Style: ${prompt.style.join(", ")}
Lighting: ${prompt.lighting.join(", ")}
Technical: ${prompt.technical.join(", ")}

Negative prompt: ${prompt.negative.join(", ")}
`.trim();
}

/* ---------- Public API ---------- */
function fixPrompt(input) {
  if (!input || !input.trim()) return "";

  const structured = classifyPrompt(input);
  resolveConflicts(structured);
  applyDefaults(structured);

  return renderPrompt(structured);
}

/* ---------- Button hook ---------- */
document.getElementById("fixBtn")?.addEventListener("click", () => {
  const input = document.getElementById("inputPrompt").value;
  document.getElementById("outputPrompt").value = fixPrompt(input);
});
