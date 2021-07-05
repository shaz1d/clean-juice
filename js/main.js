// Navbar Menu Toggle
const menuBtn = document.querySelector(".burger-menu-btn");
const navMenu = document.querySelector(".res-div");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navMenu.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navMenu.classList.remove("open");
    menuOpen = false;
  }
});

// Swiper Slider
var swiper = new Swiper(".juice-container", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".product-container", {
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

/*==================== SHOW SCROLL TOP ====================*/
const scrollTop = document.getElementById("scroll-top");
scrollTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// Scroll Reveal Animation
const sr = ScrollReveal({
  distance: "100px",
  duration: 1500,
  viewFactor: 0.5,
});

sr.reveal(
  `.content, .product-container, .section-title, .brand-section, .instagram-section`,
  {
    origin: "top",
  }
);

sr.reveal(
  `.juice-btn, .img-div, .blog:nth-child(3), footer .logo, .footer-menu`,
  {
    origin: "left",
  }
);

sr.reveal(
  `.desc, .context-div, .blog:nth-child(even), .location-details, .number, .back-btn`,
  {
    origin: "right",
  }
);
sr.reveal(`.copyright`, {
  origin: "bottom",
});
