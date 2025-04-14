const CLIENT_ID = "1361359933030793216";
const REDIRECT_URI = "https://solar-hq.vercel.app/dashboard.html";
const BOT_INVITE = `https://discord.com/oauth2/authorize?client_id=1361359933030793216&permissions=8&integration_type=0&scope=bot`;
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

document.getElementById("invite-btn-hero").onclick = () => {
  window.location.href = BOT_INVITE;
};

// Settings Panel functionality
const settingsBtn = document.getElementById('settingsBtn');
const settingsPanel = document.getElementById('settingsPanel');
const closeSettingsBtn = document.getElementById('closeSettings');
const musicToggle = document.getElementById('musicToggle');
const volumeSlider = document.getElementById('volumeSlider');
const volumeNumber = document.getElementById('volumeNumber');
const volumeDisplay = document.getElementById('volumeDisplay');

// Open/Close settings panel
settingsBtn.addEventListener('click', () => {
  settingsPanel.classList.toggle('active');
});

// Close settings panel
closeSettingsBtn.addEventListener('click', () => {
  settingsPanel.classList.remove('active');
});

// Music toggle logic
musicToggle.addEventListener('change', () => {
  if (musicToggle.checked) {
    document.querySelector('.toggle-label').textContent = "On";
  } else {
    document.querySelector('.toggle-label').textContent = "Off";
  }
});

// Volume control logic
volumeSlider.addEventListener('input', () => {
  const volumeValue = volumeSlider.value;
  volumeNumber.value = volumeValue;
  volumeDisplay.textContent = `${volumeValue}%`;
});

volumeNumber.addEventListener('input', () => {
  const volumeValue = volumeNumber.value;
  volumeSlider.value = volumeValue;
  volumeDisplay.textContent = `${volumeValue}%`;
});
