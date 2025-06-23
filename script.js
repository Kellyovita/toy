
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

// Show and scroll to top
const backToTopButton = document.querySelector(".back-to-top");
if (backToTopButton) {
  window.addEventListener("scroll", () => {
    backToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Login form animation (only on login page)
const loginForm = document.querySelector(".login-form");
if (loginForm) {
  window.addEventListener("load", () => {
    loginForm.classList.add("active");
  });
}

// Scroll throttle for hiding navbar
let isScrolling = false;
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener("scroll", () => {
  if (!isScrolling) {
    isScrolling = true;
    setTimeout(() => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop < lastScrollTop) {
        navbar.style.top = "0"; // Show navbar
      } else {
        navbar.style.top = "-80px"; // Hide navbar
      }
      lastScrollTop = scrollTop;
      isScrolling = false;
    }, 100);
  }
});

// Particle background (if using particles.js)
if (document.getElementById("particles-js")) {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 60,
        density: { enable: true, value_area: 800 }
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: 0.5,
        random: false
      },
      size: {
        value: 4,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.3,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: false },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: { opacity: 0.5 }
        }
      }
    },
    retina_detect: true
  });
}

// Forgot Password functionality
const forgotForm = document.querySelector(".forgot-password-form");
if (forgotForm) {
  forgotForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = forgotForm.email.value.trim();
    if (!email) return;

    alert(`A password reset link has been sent to ${email}`);

    fetch("https://your-backend.com/api/request-reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email })
    })
    .then(res => res.json())
    .then(data => {
      console.log("Reset request response:", data);
    })
    .catch(err => {
      console.error("Reset request failed:", err);
    });
  });
}

// Validate email on overlay input
function validateUserEmail() {
  const email = document.getElementById('userEmailInput').value;
  const error = document.getElementById('emailError');
  const emailOverlay = document.getElementById('emailOverlay');

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    error.textContent = "Please enter a valid email address.";
    return;
  }

  sessionStorage.setItem("userEmail", email);
  emailOverlay.style.display = "none";
}

// Contact form submission
const form = document.getElementById('contactForm');
const alertMsg = document.getElementById('formAlert');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        alertMsg.textContent = "âœ… Your message was sent successfully!";
        alertMsg.style.color = "green";
        form.reset();
      } else {
        throw new Error("Submission failed.");
      }
    })
    .catch(() => {
      alertMsg.textContent = "âŒ Something went wrong. Please try again.";
      alertMsg.style.color = "red";
    });
  });
}

// Greeting and business hours logic
function getGreetingAndStatus() {
  const greetingBar = document.getElementById('greeting-bar');
  if (!greetingBar) return;

  const now = new Date();
  const day = now.getDay(); // 0 (Sun) - 6 (Sat)
  const hour = now.getHours();

  let greeting;
  if (hour < 12) {
    greeting = "Good morning!";
  } else if (hour < 17) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  let status = "We are currently closed✨";
  if ((day >= 1 && day <= 5 && hour >= 8 && hour < 17) ||
      (day === 6 && hour >= 8 && hour < 13)) {
    status = "We are open🎉";
  }

  greetingBar.textContent = `👋 ${greeting} ${status}`;
}

// Run greeting on page load
document.addEventListener("DOMContentLoaded", getGreetingAndStatus);
