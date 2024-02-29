
// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");

searchBox.addEventListener("click", () => {
  navbar.classList.toggle("showInput");
  if (navbar.classList.contains("showInput")) {
    searchBox.classList.replace("bx-search", "bx-x");
  } else {
    searchBox.classList.replace("bx-x", "bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle("show1");
};

// let moreArrow = document.querySelector(".more-arrow");
// moreArrow.onclick = function () {
//   navLinks.classList.toggle("show2");
// };
let front_END = document.querySelector(".js-sub-menu .more-arrow");
front_END.onclick = function (e) {
  e.stopPropagation(); // Prevent the event from reaching the document click handler
  navLinks.classList.toggle("show2");
};


let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function () {
  navLinks.classList.toggle("show3");
};

// Function to scroll to the target section
function scrollToSection(targetId) {
  const targetElement = document.querySelector(targetId);
  const offset = 100; // Adjust this value as needed
  const scrollPosition = targetElement.offsetTop - offset;
  window.scrollTo({
    top: scrollPosition,
    behavior: 'smooth'
  });
}

// Handle click events for anchor tags
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Get the target element
    const targetElement = document.querySelector(this.getAttribute('href'));

    // Calculate the scroll position, considering the height of the navigation bar or any other fixed elements
    const offset = 100; // Adjust this value as needed
    const scrollPosition = targetElement.offsetTop - offset;

    // Scroll to the target element with a smooth behavior and adjusted scroll position
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  });
});



document.addEventListener("DOMContentLoaded", function() {
  var topLink = document.getElementById('TMresources');
  topLink.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor behavior

      // Scroll smoothly to the top of the page
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});


// Get the button
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
