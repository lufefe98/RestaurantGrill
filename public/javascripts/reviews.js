// // Hide/Reveal Review Form

const reviewBtn = document.querySelector(".review-btn")
const reviewForm = document.getElementById("reviewsForm")


reviewForm.style.display = 'none'

function toggleReviewFormDisplay() {
  if (reviewForm.style.display === 'none') {
    reviewForm.style.display = 'flex'
    reviewBtn.innerText = 'Close Form'
  } else if (reviewForm.display !== 'flex') {
    reviewForm.style.display = 'none'
    reviewBtn.innerText = 'Leave a Review'
  }
}

reviewBtn.addEventListener('click', toggleReviewFormDisplay)



// Review Card Slider/Carousel

