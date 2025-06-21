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

let isScrolling = false;
window.addEventListener("scroll", () => {
  if (!isScrolling) {
    isScrolling = true;
    setTimeout(() => {
      if (backToTopButton) {
        backToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
      }
      isScrolling = false;
    }, 100);  // Throttling the scroll event
  }
});

// Particle network background
particlesJS("particles-js", {
  stars: {
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

// Forgot Password functionality
const forgotForm = document.querySelector(".forgot-password-form");

if (forgotForm) {
  forgotForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = forgotForm.email.value.trim();
    if (!email) return;

    // Show success notification
    alert(`A password reset link has been sent to ${email}`);

    // TODO: Send email to backend (replace with actual implementation)
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
