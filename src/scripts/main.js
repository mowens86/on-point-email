//jshint esversion:6

// When the user scrolls the page, execute myFunction 
window.onscroll = () => { stickyNavigation(); };

// Get the navbar
const navbar = document.getElementById("navbar");
const fullnav = document.getElementById("fullnav");

// Get the offset position of the navbar
const sticky = fullnav.offsetTop;



// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
stickyNavigation = () => {

  // Is windows y-axis offset greater than or equal to navbar: true = add sticky class, false = remove sticky class 
  window.pageYOffset > sticky ? fullnav.classList.add("sticky") : fullnav.classList.remove("sticky");

};


// Hamburger Bar
const hamburgerBtn = document.querySelector(".hamburger");

hamburgerBtn.addEventListener("click", () => {
  
  // On click toggle active class
  hamburgerBtn.classList.toggle("is-active");

  // Create if statement to make nav-links display or not
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
console.log(document.body.scrollTop);
let topState = false;
function checkForTopOfPage () {
  const topOfPage = document.body.scrollTop;
  if (topOfPage === 0) {
  return fullnav.classList.remove("sticky");
}
}

