const CLIENT_ID = "1361359933030793216";
const REDIRECT_URI = "https://solar-hq.vercel.app/dashboard.html";
const BOT_INVITE = `https://discord.com/oauth2/authorize?client_id=1361359933030793216&permissions=8&integration_type=0&scope=bot`;
const DISCORD_OAUTH = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=identify guilds`;

// Button click handlers for OAuth and Bot Invite
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

// Settings panel logic
const settingsBtn = document.getElementById("settingsBtn");
const settingsPanel = document.getElementById("settingsPanel");
const bgColorPicker = document.getElementById("bgColorPicker");
const textColorPicker = document.getElementById("textColorPicker");
const bgMusic = document.getElementById("bgMusic");

let isOpen = false;

settingsBtn.addEventListener("click", () => {
  if (!isOpen) {
    settingsPanel.classList.remove("hidden");
    setTimeout(() => {
      settingsPanel.classList.add("active");
    }, 10);
    isOpen = true;
  } else {
    settingsPanel.classList.remove("active");
    setTimeout(() => {
      settingsPanel.classList.add("hidden");
    }, 600);
    isOpen = false;
  }
});

// Dynamic style updates
bgColorPicker.addEventListener("input", (e) => {
  document.body.style.backgroundColor = e.target.value;
});

textColorPicker.addEventListener("input", (e) => {
  document.body.style.color = e.target.value;
});
