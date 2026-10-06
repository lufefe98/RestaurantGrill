const swiper = new Swiper('.swiper', {

  loop: true,
  grabCursor: true,


  // Swiper Breakpoints

  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 50
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 50,
    }
  },



  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


// FORM SUBMISSION

const reviewForm = document.getElementById("reviewsForm")





// Load user submitted reviews 
let userReviews = JSON.parse(localStorage.getItem('reviews')) || []

window.addEventListener("DOMContentLoaded", () => {
  userReviews.forEach((review) => renderReviewCard(review));
});


// Submit Event Listener

// let userReviews = JSON.parse(localStorage.getItem('reviews')) || []

// This array holds the current data (it retrieves data
// from local storage and then we update the data and then 
// send it back to local storage from there)

reviewForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // input fields
  const reviewName = document.getElementById("name");
  const reviewDate = document.getElementById("date");
  const reviewRatings = document.querySelectorAll(".star");
  const reviewText = document.getElementById("review");

  // form validation
  if (
    !reviewName.value.trim() ||
    !reviewDate.value.trim() ||
    !reviewText.value.trim()
  ) {
    alert("Please fill out all fields.");
    return;
  }

  let selectedRating = null;
  reviewRatings.forEach((star) => {
    if (star.checked) {
      selectedRating = star.value;
    }
  });

  if (!selectedRating) {
    alert("Please select a rating.");
    return;
  }

  if (!reviewText.value.trim().length > 330) {
    alert("Please limit your review to 330 characters or less")
    return
  }

  // Create review object
  const newReview = {
    name: reviewName.value.trim(),
    date: reviewDate.value.trim(),
    rating: selectedRating,
    text: reviewText.value.trim(),
    id: crypto.randomUUID()
  };

  // Save to localStorage
  const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  savedReviews.push(newReview);
  userReviews.push(newReview);
  console.log(userReviews)
  localStorage.setItem("reviews", JSON.stringify(savedReviews));

  // Render the new review card
  renderReviewCard();

  // Reset form
  reviewForm.reset();
});



// function renderReviewCard(review) {

function renderReviewCard() {

  // Clear Out UI before Adding reviews/new reviews

  reviewCardList.innerHTML = ''

  // CREATE REVIEW CARD ELEMENTS

  userReviews.forEach(userReview => {
      // Card
  const reviewCard = document.createElement("div");
  reviewCard.classList.add("review-card", "swiper-slide");

  // Review Details
  const reviewCardDetails = document.createElement("div");
  reviewCardDetails.classList.add("review-details");

  // review name
  const reviewCardName = document.createElement("span");
  reviewCardName.classList.add("review-name");
  reviewCardName.textContent = userReview.name;

    // review separator
  const separator = document.createTextNode(" | ");

  // review date
  const reviewCardDate = document.createElement("span");
  reviewCardDate.classList.add("review-date");
  const formattedDate = new Date(userReview.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  reviewCardDate.textContent = formattedDate;


  // Card Options
  const reviewOptions = document.createElement('div')
  reviewOptions.classList.add('review-options')


  // card option button
  const reviewOptionButton = document.createElement('button')
  reviewOptionButton.classList.add('review-options-btn')
  reviewOptionButton.textContent = "\u22EE"

  
  // card option dropdown
  const reviewOptionsDropdown = document.createElement('div')
  reviewOptionsDropdown.classList.add('review-options-dropdown', 'hide-dropdown')


  // card dropdown items
  const dropDownValues = ['edit', 'delete']

  for (let i = 0; i < dropDownValues.length; i++) {
    const reviewDropdownItem = document.createElement('a')
    reviewDropdownItem.classList.add('review-dropdown-item')

    reviewDropdownItem.setAttribute('value', dropDownValues[i])
    reviewDropdownItem.textContent = dropDownValues[i].charAt(0).toUpperCase() + dropDownValues[i].slice(1)

    reviewOptionsDropdown.appendChild(reviewDropdownItem)

  }

  reviewOptions.append(reviewOptionButton, reviewOptionsDropdown)

    // Review Text
  const reviewCardText = document.createElement("p");
  reviewCardText.classList.add("review-text");
  reviewCardText.textContent = userReview.text;


  // Review Rating
  const reviewCardRating = document.createElement("p");
  reviewCardRating.classList.add("review-rating");
  reviewCardRating.textContent = `Rating: ${userReview.rating}/5`;

  // Card ID
  reviewCard.dataset.id = userReview.id

  // APPEND CARD ELEMENTS
  reviewCardDetails.append(reviewCardName, separator, reviewCardDate);
  reviewCard.append(reviewCardDetails, reviewOptions, reviewCardText, reviewCardRating);

  swiper.appendSlide(reviewCard);
  });
}




// Iterate through array to render reviews, and also match
// reviews in the UI and the array/localStorage.

// function renderReviewCard(review) {

  // Card
  // const reviewCard = document.createElement("div");
  // reviewCard.classList.add("review-card", "swiper-slide");

  // // Review Details
  // const reviewCardDetails = document.createElement("div");
  // reviewCardDetails.classList.add("review-details");

  // // review name
  // const reviewCardName = document.createElement("span");
  // reviewCardName.classList.add("review-name");
  // reviewCardName.textContent = review.name;


  // // review separator
  // const separator = document.createTextNode(" | ");

  // // review date
  // const reviewCardDate = document.createElement("span");
  // reviewCardDate.classList.add("review-date");
  // const formattedDate = new Date(review.date).toLocaleDateString("en-GB", {
  //   day: "numeric",
  //   month: "short",
  //   year: "numeric",
  // });
  // reviewCardDate.textContent = formattedDate;


  // // Card Options
  // const reviewOptions = document.createElement('div')
  // reviewOptions.classList.add('review-options')


  // // card option button
  // const reviewOptionButton = document.createElement('button')
  // reviewOptionButton.classList.add('review-options-btn')
  // reviewOptionButton.textContent = "\u22EE"


  // // card option dropdown
  // const reviewOptionsDropdown = document.createElement('div')
  // reviewOptionsDropdown.classList.add('review-options-dropdown', 'hide-dropdown')


  // // card dropdown items
  // const dropDownValues = ['edit', 'delete']

  // for (let i = 0; i < dropDownValues.length; i++) {
  //   const reviewDropdownItem = document.createElement('a')
  //   reviewDropdownItem.classList.add('review-dropdown-item')

  //   reviewDropdownItem.setAttribute('value', dropDownValues[i])
  //   reviewDropdownItem.textContent = dropDownValues[i].charAt(0).toUpperCase() + dropDownValues[i].slice(1)

  //   reviewOptionsDropdown.appendChild(reviewDropdownItem)

  // }

  // reviewOptions.append(reviewOptionButton, reviewOptionsDropdown)



  // // Review Text
  // const reviewCardText = document.createElement("p");
  // reviewCardText.classList.add("review-text");
  // reviewCardText.textContent = review.text;


  // // Review Rating
  // const reviewCardRating = document.createElement("p");
  // reviewCardRating.classList.add("review-rating");
  // reviewCardRating.textContent = `Rating: ${review.rating}/5`;

  // // Card ID
  // reviewCard.dataset.id = review.id

  // // APPEND CARD ELEMENTS
  // reviewCardDetails.append(reviewCardName, separator, reviewCardDate);
  // reviewCard.append(reviewCardDetails, reviewOptions, reviewCardText, reviewCardRating);

  // swiper.appendSlide(reviewCard);
// }