const authForm = document.querySelector("#auth-form");
const authPassword = document.querySelector("#auth-password");
const authMessage = document.querySelector("#auth-message");
const accessHash = "8bfbce8c7346ca070994455a6fdf4aa96a7930427f43a082779eff7455715568";
const accessCookie = "maxim-brik-access-v2";
const oneYear = 60 * 60 * 24 * 365;

function cookieSuffix(maxAge = oneYear) {
  return `; path=/; max-age=${maxAge}; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
}

function toHex(buffer) {
  return [...new Uint8Array(buffer)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function hashPassword(password) {
  const bytes = new TextEncoder().encode(password);
  return toHex(await crypto.subtle.digest("SHA-256", bytes));
}

function grantAccess() {
  try {
    localStorage.setItem(accessCookie, "granted");
  } catch {}
  document.cookie = `${encodeURIComponent(accessCookie)}=granted${cookieSuffix()}`;
  document.documentElement.classList.remove("auth-pending");
  document.documentElement.classList.add("is-authorized");
  window.dispatchEvent(new CustomEvent("site-authorized"));
}

const authFallbackTimer = setTimeout(() => {
  if (!document.documentElement.classList.contains("auth-pending")) return;
  authForm.hidden = false;
  authForm.style.display = "grid";
  authForm.style.opacity = "1";
  authForm.style.visibility = "visible";
}, 1200);

if (document.documentElement.classList.contains("is-authorized")) {
  clearTimeout(authFallbackTimer);
  document.cookie = `${encodeURIComponent(accessCookie)}=granted${cookieSuffix()}`;
  authForm.hidden = true;
} else {
  requestAnimationFrame(() => authPassword.focus());
}

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  authForm.classList.remove("auth-error");
  authMessage.textContent = "";

  try {
    if (await hashPassword(authPassword.value) === accessHash) {
      grantAccess();
      return;
    }
  } catch {
    authMessage.textContent = "Secure connection required";
    return;
  }

  authMessage.textContent = "Incorrect password";
  authPassword.value = "";
  authForm.classList.add("auth-error");
  authPassword.focus();
});
