const CLIENT_ID = "1361359933030793216";
const REDIRECT_URI = "https://solar-hq.vercel.app/index.html";
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
