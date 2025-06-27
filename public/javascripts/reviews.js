// // Hide/Reveal Review Form

const reviewBtn = document.querySelector(".review-btn")
const form = document.getElementById("reviewsForm")


form.style.display = 'none'

function toggleformDisplay() {
  if (form.style.display === 'none') {
    form.style.display = 'flex'
    reviewBtn.innerText = 'Close Form'
  } else if (form.display !== 'flex') {
    form.style.display = 'none'
    reviewBtn.innerText = 'Leave a Review'
  }
}

reviewBtn.addEventListener('click', toggleformDisplay)