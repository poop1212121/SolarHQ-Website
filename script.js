const CLIENT_ID = "1361359933030793216";
const REDIRECT_URI = "https://solar-hq.vercel.app/dashboard.html";
const BOT_INVITE = `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&permissions=8&integration_type=0&scope=bot`;
const DISCORD_OAUTH = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=identify guilds`;

document.getElementById("login-btn").onclick = () => {
  window.location.href = DISCORD_OAUTH;
};

document.getElementById("login-btn-hero").onclick = () => {
  window.location.href = DISCORD_OAUTH;
};

document.getElementById("invite-btn").onclick = () => {
  window.location.href = BOT_INVITE;
};

const settingsBtn = document.getElementById("settingsBtn");
const settingsPanel = document.getElementById("settingsPanel");
const closeSettings = document.getElementById("closeSettings");
const themeColorInput = document.getElementById("themeColor");
const textColorInput = document.getElementById("textColor");
const backgroundImageInput = document.getElementById("backgroundImage");
const resetSettings = document.getElementById("resetSettings");

// Show settings panel
settingsBtn.onclick = () => {
  settingsPanel.classList.add("active");
};

// Hide settings panel
closeSettings.onclick = () => {
  settingsPanel.classList.remove("active");
};

// Change theme color
themeColorInput.oninput = () => {
  document.documentElement.style.setProperty("--theme-color", themeColorInput.value);
  document.querySelectorAll("header, .actions button, #settingsPanel button").forEach(el => {
    el.style.background = themeColorInput.value;
  });
};

// Change text color
textColorInput.oninput = () => {
  document.body.style.color = textColorInput.value;
};

// Background image upload
backgroundImageInput.onchange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      document.body.style.backgroundImage = `url(${event.target.result})`;
    };
    reader.readAsDataURL(file);
  }
};

// Reset
resetSettings.onclick = () => {
  document.body.style = "";
  document.querySelectorAll("header, .actions button, #settingsPanel button").forEach(el => {
    el.style.background = "";
  });
};
