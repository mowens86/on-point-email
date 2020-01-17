//jshint esversion:6


//Navbar Section
window.onscroll = () => { stickyNavigation(); };

const navbar = document.getElementById("navbar");
const fullnav = document.getElementById("fullnav");
const sticky = fullnav.offsetTop;
stickyNavigation = () => {
  window.pageYOffset > sticky ? fullnav.classList.add("sticky") : fullnav.classList.remove("sticky");
};


// Hamburger Bar
const hamburgerBtn = document.querySelector(".hamburger");
hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("is-active");
  hamburgerBtn.classList.contains("is-active") ? navbar.style.display = "flex" : navbar.style.display = "none";
});


// Check for view width to bring back navbar
let lastState = false;
function checkForViewportChange () {
    const state = window.matchMedia("(min-width: 600px)").matches;
    if (state != lastState) {
        if (state) {
          navbar.style.display = "flex";
        } else {
          navbar.style.display = "none";
        }
        lastState = state;
}}



window.setInterval(checkForViewportChange, 150);

// Check to see if top is 0 if so remove sticky navbar to reset padding
let topState = false;
function checkForTopOfPage () {
  const topOfPage = document.body.scrollTop;
  if (topOfPage === 0) {
  return fullnav.classList.remove("sticky");
  }
}

// Update Current Year
const currentYear = () => {
  let year = new Date();
  let updatedYear = year.getFullYear();
  document.getElementById("currentYear").innerHTML = updatedYear;
};

currentYear();
