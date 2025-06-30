// Toggle dark mode
const toggleBtn = document.querySelector(".dark-toggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// Toggle mobile menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// Smooth scroll to top
const backToTopBtn = document.querySelector(".back-to-top");
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Auto-hide mobile nav on link click (optional)
const navItems = document.querySelectorAll(".nav-links a");
navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// Email overlay logic (for contact.html only)
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function submitUserEmail() {
  const emailInput = document.getElementById("userEmail");
  const error = document.getElementById("emailError");
  const email = emailInput.value.trim();

  if (!validateEmail(email)) {
    error.style.display = "block";
    return;
  }

  error.style.display = "none";
  document.getElementById("emailPromptOverlay").style.display = "none";

  // Autofill email field if form is visible
  const contactEmailField = document.getElementById("email");
  if (contactEmailField) {
    contactEmailField.value = email;
  }
}
