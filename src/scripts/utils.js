//jshint esversion:6

// Modal Section
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

const toggleModal = () => {
    modal.classList.toggle("show-modal");
}

const windowOnClick = (event) => {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
if (closeButton) {
  closeButton.addEventListener("click", toggleModal, false);
}
window.addEventListener("click", windowOnClick);


// Carousel Section
const carouselQuotes = [
  {quote: "Fast Service, beautiful templates, and communication was great! Not only that but the pricing is fair and honest. I didn't feel pressured or rushed, just options for me to decide. Definitely coming back for more in the future.", author: "~ Rob Lint" },
  {quote: "We needed an email template quickly for an upcoming email campaign, they created it within 24 hours, it was responsonsive, and looked beautiful! We even had replies during the campaign about how great our emails looked.", author: "~ Linda Schmeil" },
  {quote: "Communication was very swift and understandable. If I didn't understand, they always explained to the point of where I could. They did a thorough job of explaining the process and the template was gourgeous. A+ Highly recommend!", author: "~ Meagan O'Neil" },
];

const quotePara = document.querySelector(".testimonial-content-p");
const quoteAuthor = document.querySelector(".testimonial-content-h2");
const dotOne = document.getElementsByClassName("dot")[0];
const dotTwo = document.getElementsByClassName("dot")[1];
const dotThree = document.getElementsByClassName("dot")[2];
const quoteTime = 8000;
let counter = 0;

const changeQuote = () => {

  quotePara.innerHTML = carouselQuotes[counter].quote;
  quoteAuthor.innerHTML = carouselQuotes[counter].author;
  
  if (counter === 2) {
    dotThree.classList.add("active-dot");
    dotTwo.classList.remove("active-dot");
    dotOne.classList.remove("active-dot");
  } else if (counter === 1) {
    dotTwo.classList.add("active-dot");
    dotOne.classList.remove("active-dot");
    dotThree.classList.remove("active-dot");
  } else {
    dotOne.classList.add("active-dot");
    dotTwo.classList.remove("active-dot");
    dotThree.classList.remove("active-dot");
  }

  counter < carouselQuotes.length - 1 ? counter++ : counter = 0;
};
setInterval(changeQuote, quoteTime);
window.onload = changeQuote;