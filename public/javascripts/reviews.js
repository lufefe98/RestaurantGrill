// Hide/Reveal Review Form

const reviewBtn = document.querySelector(".review-btn")
const form = document.getElementById("reviewsForm")

const reviewsOptionBtn = document.querySelectorAll(".review-options-btn")
const reviewsOptionDropdown = document.querySelectorAll(".review-options-dropdown")
const editFormSection = document.getElementById("edit-reviews-container")


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


// Hide/Display Edit/ Options

// function toggleReviewOptions() {
//   reviewsOptionDropdown[0].showPicker()
//       // reviewsOptionDropdown[0].style.display = 'none'
//       console.log('triggered')
//   // if (editFormSection.style.display = 'none') {
//     //   editFormSection.style.display = 'inline-block'
//     // } else {
//       //   editFormSection.style.display = 'none'
//       // }
//     }
    reviewsOptionDropdown[0].style.display = 'inline-block'
    
reviewsOptionBtn[0].addEventListener('click', function () {
  reviewsOptionDropdown[0].showPicker()
      console.log('triggered')
    })



// Hide/Display Edit Review Form


