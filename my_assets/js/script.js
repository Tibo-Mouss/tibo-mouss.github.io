'use strict';




// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");


// Move this line outside of any specific article-related code
document.body.appendChild(modalContainer);


// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();
  });
}

function clearModalTestimonial() {
    modalImg.src = "";
    modalImg.alt = "";
    modalTitle.innerHTML = "";
    modalText.innerHTML = "";

    testimonialsModalFunc();
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", clearModalTestimonial);
overlay.addEventListener("click", clearModalTestimonial);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// Onclick event on list of items (Phone mode) in Portfolio tab
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all projects") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// Onclick event on filter buttons (Desktop mode) in Portfolio tab
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.dataset.filterBtn.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");
var current_page = "about";

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  addClickNavigation(navigationLinks[i]);
}

function goToPage(targetPage, scrollTo = "") {
  var page_is_found = false;

  for (let i = 0; i < pages.length; i++) {
    if (targetPage === pages[i].dataset.page) {
      pages[i].classList.add("active");
      navigationLinks[i].classList.add("active");
      window.scrollTo(0, 0);
      current_page = targetPage;
      // history.pushState({}, null, getFullURL());
      is_page_found = true;
    } else {
      pages[i].classList.remove("active");
      navigationLinks[i].classList.remove("active");
    }
  }

  if (!is_page_found) {
    pages[0].classList.add("active");
    navigationLinks[0].classList.add("active");
    window.scrollTo(0, 0);
    current_page = "about";
  }

  if (scrollTo != "") {
    const textElement = document.getElementById(scrollTo);

    textElement.scrollIntoView({behavior: "smooth"});
  }
}

function addClickNavigation(navigationLink) {
  navigationLink.addEventListener("click", function () {
    const targetPage = this.dataset.navLink; // Get the value from the data-nav-link attribute
    goToPage(targetPage);
  });
}








// ---- Default landing page -----

// Function to parse query parameters from the URL
function getQueryParam(paramName) {
  const urlSearchParams = new URLSearchParams(window.location.search);
  return urlSearchParams.get(paramName);
}

const landingPage = getQueryParam('landing');
const scrollToOnLanding = getQueryParam('scrollTo');

var is_page_found = false

if (landingPage) {
  if (scrollToOnLanding) {
    goToPage(landingPage, scrollToOnLanding);
  } else {
    goToPage(landingPage);
  }
}


// FOR IMAGE SLIDES


//  Pour rajouter un slider faut:
//    Ajouter l'élément dans cette liste
//    Ajouter le code html de slider et changer 3 trucs :
//      Le code 
// var slideIndex = 1;
var slideIndex_dict = {
  "SLIDER_portfolio_sopra_steria": 1,
  "SLIDER_asso_IA": 1,
  "slider_bot_gl1": 1,
  "slider_bot_gl2": 1,
  "slider_minecraft_plugin": 1,
  "slider_minecraft_plugin_2": 1,
  "slider_caster_calendar1": 1,
  "slider_caster_calendar2": 1,
  "slider_antidiction1": 1,
  "slider_antidiction2": 1,
  "slider_antidiction3": 1,
};

for (let [key, value] of Object.entries(slideIndex_dict)) {
  showDivs(value, key, 2);
}

function plusDivs(n, slider_name, slider_images_nb) {
  showDivs(slideIndex_dict[slider_name] += n, slider_name, slider_images_nb);
}

function showDivs(n, slider_name, slider_images_nb) {
  var i;
  var x = document.getElementsByClassName(slider_name);
  if (n > slider_images_nb) { slideIndex_dict[slider_name] = 1 }
  if (n < 1) { slideIndex_dict[slider_name] = slider_images_nb }
  for (i = 0; i < slider_images_nb; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex_dict[slider_name] - 1].style.display = "block";
}

// make it slides automatically
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {slideIndex = 1}
//   x[slideIndex-1].style.display = "block";
//   setTimeout(carousel, 5000); // Change image every 5 seconds
// }




// Makes the item redirect (in another page) to another link when clicked
function redirectBlank(link) {
  window.open(link, "_blank");
}

// Makes the item redirect (in same page) to another link when clicked
function redirect(link) {
  location.href=link;
}


