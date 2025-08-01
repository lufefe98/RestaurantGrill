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

// Form

const reviewForm = document.getElementById("reviewsForm")


const reviewCards = document.getElementsByClassName('review-card')


// Load user submitted reviews 

window.addEventListener("DOMContentLoaded", () => {
  const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  savedReviews.forEach((review) => renderReviewCard(review));
});

// Submit Event Listener



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

  // Create review object
  const newReview = {
    name: reviewName.value.trim(),
    date: reviewDate.value.trim(),
    rating: selectedRating,
    text: reviewText.value.trim(),
  };

  // Save to localStorage
  const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  savedReviews.push(newReview);
  localStorage.setItem("reviews", JSON.stringify(savedReviews));

  // Render the new review card
  renderReviewCard(newReview);

  // Reset form
  reviewForm.reset();
});



function renderReviewCard(review) {
  const reviewCard = document.createElement("div");
  reviewCard.classList.add("review-card", "swiper-slide");

  const reviewCardDetails = document.createElement("div");
  reviewCardDetails.classList.add("review-details");

  const reviewCardName = document.createElement("span");
  reviewCardName.classList.add("review-name");
  reviewCardName.textContent = review.name;

  const separator = document.createTextNode(" | ");

  const reviewCardDate = document.createElement("span");
  reviewCardDate.classList.add("review-date");
  reviewCardDate.textContent = review.date;

  const reviewCardText = document.createElement("p");
  reviewCardText.classList.add("review-text");
  reviewCardText.textContent = review.text;

  const reviewCardRating = document.createElement("p");
  reviewCardRating.classList.add("review-rating");
  reviewCardRating.textContent = `Rating: ${review.rating}/5`;

  reviewCardDetails.append(reviewCardName, separator, reviewCardDate);
  reviewCard.append(reviewCardDetails, reviewCardText, reviewCardRating);

  swiper.appendSlide(reviewCard);
}