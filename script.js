const CLIENT_ID = "1361359933030793216";
const REDIRECT_URI = "https://solar-hq.vercel.app/dashboard.html";
const BOT_INVITE = `https://discord.com/oauth2/authorize?client_id=1361359933030793216&permissions=8&integration_type=0&scope=bot`;
const DISCORD_OAUTH = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=identify guilds`;

document.getElementById("login-btn").onclick = () => window.location.href = DISCORD_OAUTH;
document.getElementById("login-btn-hero").onclick = () => window.location.href = DISCORD_OAUTH;
document.getElementById("invite-btn").onclick = () => window.location.href = BOT_INVITE;
document.getElementById("invite-btn-hero").onclick = () => window.location.href = BOT_INVITE;

// Settings Panel
const settingsBtn = document.getElementById("settingsBtn");
const settingsPanel = document.getElementById("settingsPanel");
const closeSettings = document.getElementById("closeSettings");

settingsBtn.onclick = () => {
  settingsPanel.classList.add("show");
  settingsPanel.classList.remove("hidden");
};

closeSettings.onclick = () => {
  settingsPanel.classList.remove("show");
  setTimeout(() => settingsPanel.classList.add("hidden"), 500);
};

// Background Color
document.getElementById("bgColor").addEventListener("input", (e) => {
  document.body.style.backgroundColor = e.target.value;
});

// Text Color
document.getElementById("textColor").addEventListener("input", (e) => {
  document.body.style.color = e.target.value;
  document.querySelectorAll("h1, h2, h3, h4, p, a, label").forEach(el => {
    el.style.color = e.target.value;
  });
});

// Button Color
document.getElementById("buttonColor").addEventListener("input", (e) => {
  document.querySelectorAll("button").forEach(btn => {
    btn.style.backgroundColor = e.target.value;
  });
});

// Font Selector
document.getElementById("fontSelector").addEventListener("change", (e) => {
  document.body.style.fontFamily = e.target.value;
});

// Background Image
document.getElementById("bgImage").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      document.body.style.backgroundImage = `url(${reader.result})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
    };
    reader.readAsDataURL(file);
  }
});

// Music Controls
const music = document.getElementById("background-music");
document.getElementById("playMusic").onclick = () => music.play();
document.getElementById("pauseMusic").onclick = () => music.pause();
document.getElementById("muteMusic").onclick = () => music.muted = !music.muted;
document.getElementById("volumeControl").addEventListener("input", (e) => {
  music.volume = e.target.value;
});
