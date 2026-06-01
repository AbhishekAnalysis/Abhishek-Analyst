/* ══════════════════════════════════════════
   PORTFOLIO — script.js
   ══════════════════════════════════════════ */

/* ─────────────────────────────────────────
   CUSTOM CURSOR
   ───────────────────────────────────────── */
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top  = e.clientY + "px";
});

const hoverTargets = document.querySelectorAll(
  "a, button, input, textarea, .skill-pill, .project-card, .stat-card"
);
hoverTargets.forEach((el) => {
  el.addEventListener("mouseenter", () => cursor.classList.add("grow"));
  el.addEventListener("mouseleave", () => cursor.classList.remove("grow"));
});

/* ─────────────────────────────────────────
   SCROLL REVEAL
   ───────────────────────────────────────── */
const reveals  = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);
reveals.forEach((el) => observer.observe(el));

/* ─────────────────────────────────────────
   CONTACT FORM
   ───────────────────────────────────────── */
const sendBtn  = document.getElementById("send-btn");
const statusEl = document.getElementById("form-status");

sendBtn.addEventListener("click", () => {
  const from_name = document.getElementById("from_name").value.trim();
  const reply_to  = document.getElementById("reply_to").value.trim();
  const subject   = document.getElementById("subject").value.trim();
  const message   = document.getElementById("message").value.trim();

  if (!from_name || !reply_to || !subject || !message) {
    showStatus("Please fill in all fields.", "error");
    return;
  }

 const body = encodeURIComponent(`Name: ${from_name}\nEmail: ${reply_to}\n\n${message}`);
  window.open(`mailto:abhishekkumar98delhi@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`, "_self");
});

/* ── Helpers ── */
function showStatus(msg, type) {
  statusEl.textContent = msg;
  statusEl.className   = "form-status " + type;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}