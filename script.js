/* ══════════════════════════════════════════
   PORTFOLIO — script.js
   ══════════════════════════════════════════ */

/* ─────────────────────────────────────────
   EMAILJS CONFIG
   ─ Replace the three values below with
     your own from emailjs.com (it's free)
   ───────────────────────────────────────── */
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";   // e.g. "abc123XYZ"
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // e.g. "service_xxxxxx"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // e.g. "template_xxxxxx"

/* ─────────────────────────────────────────
   INITIALISE EMAILJS
   ───────────────────────────────────────── */
emailjs.init(EMAILJS_PUBLIC_KEY);

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
   CONTACT FORM — sends to your Gmail
   via EmailJS (no backend needed)
   ───────────────────────────────────────── */
const sendBtn    = document.getElementById("send-btn");
const statusEl   = document.getElementById("form-status");

sendBtn.addEventListener("click", async () => {
  // Collect field values
  const from_name = document.getElementById("from_name").value.trim();
  const reply_to  = document.getElementById("reply_to").value.trim();
  const subject   = document.getElementById("subject").value.trim();
  const message   = document.getElementById("message").value.trim();

  // Basic validation
  if (!from_name || !reply_to || !subject || !message) {
    showStatus("Please fill in all fields.", "error");
    return;
  }

  if (!isValidEmail(reply_to)) {
    showStatus("Please enter a valid email address.", "error");
    return;
  }

  // Disable button while sending
  sendBtn.disabled    = true;
  sendBtn.textContent = "Sending…";
  statusEl.textContent = "";

  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name,
      reply_to,
      subject,
      message,
    });

    showStatus("✓ Message sent! I'll get back to you soon.", "success");
    sendBtn.textContent = "✓ Sent!";
    sendBtn.style.background = "#22c55e";

    // Clear form fields
    ["from_name", "reply_to", "subject", "message"].forEach(
      (id) => (document.getElementById(id).value = "")
    );

    // Reset button after 4 s
    setTimeout(() => {
      sendBtn.textContent      = "Send Message ↗";
      sendBtn.style.background = "";
      sendBtn.disabled         = false;
    }, 4000);

  } catch (err) {
    console.error("EmailJS error:", err);
    showStatus("Something went wrong. Please try again or email me directly.", "error");
    sendBtn.textContent = "Send Message ↗";
    sendBtn.disabled    = false;
  }
});

/* ── Helpers ── */
function showStatus(msg, type) {
  statusEl.textContent = msg;
  statusEl.className   = "form-status " + type;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
