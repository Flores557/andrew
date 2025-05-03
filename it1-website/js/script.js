document.addEventListener("DOMContentLoaded", function () {
  // Smooth Scrolling
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });

        const nav = document.querySelector(".nav-links");
        const burger = document.querySelector(".burger");
        if (nav.classList.contains("active")) {
          nav.classList.remove("active");
          burger.classList.remove("active");
        }
      }
    });
  });

  // Mobile Menu Toggle
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  burger.addEventListener("click", function () {
    nav.classList.toggle("active");
    this.classList.toggle("active");
  });

  // Sticky Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  // Scroll Animations
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".section-title, .about-text, .gallery, .skill-item, .section-member, .adviser-image, .adviser-info"
    );
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      if (elementPosition < screenPosition) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  document
    .querySelectorAll(
      ".section-title, .about-text, .gallery, .skill-item, .section-member, .adviser-image, .adviser-info"
    )
    .forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

  animateOnScroll();
  window.addEventListener("scroll", animateOnScroll);

  // Image Hover Effects
  document
    .querySelectorAll(".gallery img, .skill-item img, .section-member img")
    .forEach((img) => {
      img.addEventListener("mouseenter", function () {
        this.style.transition = "transform 0.3s ease";
        this.style.transform = "scale(1.05)";
      });
      img.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
      });
    });

  // Logo Animation
  const logo = document.querySelector(".circle-logo");
  if (logo) {
    logo.addEventListener("mouseenter", function () {
      this.style.animation = "pulse 0.5s ease";
      setTimeout(() => {
        this.style.animation = "";
      }, 500);
    });
  }
  const modalOverlay = document.getElementById("modalOverlay");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close-btn");

  document.querySelectorAll(".clickable-image").forEach((image) => {
    image.addEventListener("click", () => {
      modalImage.src = image.src;
      modalOverlay.classList.add("active");
    });
  });

  function closeModal() {
    modalOverlay.classList.remove("active");
  }

  // Add click event to all clickable images
  document.querySelectorAll(".clickable-image").forEach((img) => {
    img.addEventListener("click", function () {
      openModal(this.src);
    });
  });

  // Close modal when clicking close button
  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  // Close modal when clicking outside the image
  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Modal for Login Form
  const loginModal = document.getElementById("loginModal");
  const loginBtn = document.getElementById("loginBtn");
  const closeLogin = loginModal.querySelector(".close");

  if (loginBtn) {
    loginBtn.addEventListener("click", function (e) {
      e.preventDefault();
      loginModal.style.display = "block";
    });
  }

  if (closeLogin) {
    closeLogin.addEventListener("click", function () {
      loginModal.style.display = "none";
    });
  }

  window.addEventListener("click", function (e) {
    if (e.target == loginModal) {
      loginModal.style.display = "none";
    }
  });

  // Focus input fields when clicked
  document.querySelectorAll(".input-box input").forEach((input) => {
    input.addEventListener("click", function () {
      this.focus();
    });
  });
});
// Modal logic
const modalOverlay = document.getElementById("modalOverlay");
const modalImage = document.getElementById("modalImage");
const images = document.querySelectorAll(".clickable-image");

images.forEach((img) => {
  img.addEventListener("click", () => {
    modalImage.src = img.src;
    modalOverlay.classList.add("active");
  });
});

function closeModal() {
  modalOverlay.classList.remove("active");
  modalImage.src = "";
}

// Close modal when clicking outside the image
modalOverlay.addEventListener("click", function (e) {
  if (e.target === modalOverlay) {
    closeModal();
  }
});
const text = document.getElementById("animatedText");
const content = text.textContent.trim();
const rainbowColors = [
  "#FF0000",
  "#FF7F00",
  "#FFFF00",
  "#00FF00",
  "#0000FF",
  "#4B0082",
  "#8F00FF",
];

text.innerHTML = content
  .split("")
  .map((char, i) => {
    const displayChar = char === " " ? "&nbsp;" : char;
    const color = rainbowColors[i % rainbowColors.length];
    return `<span style="--i:${i}; color:${color}">${displayChar}</span>`;
  })
  .join("");
