// Get the progress bar element
var progressBar = document.getElementById("myBar");

// Calculate the scroll progress and update the progress bar width
function updateProgressBar() {
    var scrollTop = window.scrollY;
    var windowHeight = window.innerHeight;
    var documentHeight = document.body.clientHeight;
    var scrollableDistance = documentHeight - windowHeight;
    var progress = (scrollTop / scrollableDistance) * 100;
    progressBar.style.width = progress + "%";
}

// Listen for scroll events and update the progress bar
window.addEventListener("scroll", updateProgressBar);
// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}



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

// Scroll to top button functionality
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



// Attach scrollToTop function to the click event of the scrollToTopBtn
scrollToTopBtn.addEventListener('click', scrollToTop);

// Check if the progress element exists in the document
let prog = document.getElementById('progress');
if (!prog) {
    console.error("Progress element not found.");
}

// Function to calculate and set the progress
const setProgress = () => {
    let scrollFromTop = window.scrollY || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let width = (scrollFromTop / height) * 100 + '%';

    if (prog) {
        prog.style.width = width;
    }
};

// Add scroll event listener
window.addEventListener('scroll', setProgress);

// Initial call to set progress when the page loads
setProgress();
