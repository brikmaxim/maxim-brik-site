const authForm = document.querySelector("#auth-form");
const authPassword = document.querySelector("#auth-password");
const authMessage = document.querySelector("#auth-message");
const accessHash = "8bfbce8c7346ca070994455a6fdf4aa96a7930427f43a082779eff7455715568";

function toHex(buffer) {
  return [...new Uint8Array(buffer)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function hashPassword(password) {
  const bytes = new TextEncoder().encode(password);
  return toHex(await crypto.subtle.digest("SHA-256", bytes));
}

function grantAccess() {
  try {
    localStorage.setItem("maxim-brik-access-v2", "granted");
  } catch {}
  document.documentElement.classList.remove("auth-pending");
  document.documentElement.classList.add("is-authorized");
  window.dispatchEvent(new CustomEvent("site-authorized"));
}

if (document.documentElement.classList.contains("is-authorized")) {
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
