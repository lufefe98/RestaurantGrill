// Hide/Reveal Review Form

const reviewBtn = document.querySelector(".review-btn")
const form = document.getElementById("reviewsForm")

const reviewsOptionBtn = document.querySelector(".review-options-btn")
const reviewsFormSection = document.getElementById("reviews-container")
const editFormSection = document.getElementById("edit-reviews-container")
const editReviewsForm = document.getElementById("editReviewsForm")
const reviewCardList = document.querySelector(".card-list")
const reviewCard = document.getElementsByClassName("review-card")
const arrayCards = Array.from(reviewCard)

const editReviewText = document.getElementById('edit-review-text')
let editedRatings = document.querySelectorAll(".editStar");
const reviewEditButton = document.getElementById('reviewEditButton')
const cancelEditButton = document.getElementById('cancel-edit-btn')

const modal = document.querySelector('dialog')
const cancelDeleteBtn = document.querySelector('#closeModalBtn')
const deleteBtn = document.querySelector('#deleteBtn')

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




// Hide/Display Edit/Delete Options

let activeCard = undefined
// create reference for triggered card

reviewCardList.addEventListener('click', (event) => {

  // If the button was not pressed, then we do not
  // let the rest of the function execute.

  if (!event.target.classList.contains('review-options-btn')) return

  // Handle Element State
  const targetCard = event.target.closest('.review-card')

  activeCard = activeCard === targetCard ? null : targetCard
  // if the clicked card is already opened, then close it.
  // if not, then leave it opened.


  Array.from(reviewCard).forEach(card => {
    const reviewsOptionDropdown = card.querySelector(".review-options-dropdown")

    if (card === activeCard) {
      reviewsOptionDropdown.style.display = 'flex'
    } else {
      reviewsOptionDropdown.style.display = 'none'
    }
  })
})


// Hide card dropdown if user clicks elsewhere
document.addEventListener('click', (event) => {
  if (!event.target.closest('.review-options-btn')) {
    activeCard = undefined

    Array.from(reviewCard).forEach(card => {
      card.querySelector(".review-options-dropdown").style.display = 'none'
    });
  }
})





// Edit & Delete Feature

let currId

reviewCardList.addEventListener('click', (event) => {
  const dropdownItemText = event.target.textContent

  // Edit Option Clicked
  if (event.target.classList.contains('review-dropdown-item')
    && dropdownItemText === 'Edit') {
    event.preventDefault()

    // Get review ID

    currId = event.target.closest('.review-card').dataset.id



    // Hide form for creating reviews and open editing form
    reviewsFormSection.classList.add('inactive-review-form')

    editFormSection.style.display = 'block'



    // Populate form fields
    const ratingText = event.target.closest('.review-card').querySelector('.review-rating').textContent
    let rating = ratingText[ratingText.length - 3]
    editReviewText.value = event.target.closest('.review-card').querySelector('.review-text').textContent

    editedRatings.forEach(editRating => {
      if (editRating.value === rating) {
        editRating.checked = true
      }
    });


  }



  // Delete Option Clicked

  if (event.target.classList.contains('review-dropdown-item')
    && dropdownItemText === 'Delete') {
    currId = event.target.closest('.review-card').dataset.id
    modal.classList.add('show-modal')
  }

})




// Handle Editing
editReviewsForm.addEventListener('submit', (event) => {
  event.preventDefault()

  editedRatings.forEach(editedRating => {
    if (editedRating.checked) {
      editedRating.checked = true
    }
  });


  const ratingsArr = Array.from(editedRatings)

  userReviews = userReviews.map(userReview =>
    userReview.id === currId ? {
      ...userReview,
      text: editReviewText.value,
      rating: ratingsArr.find(editedRating => editedRating.checked)?.value || '1'
    } : userReview

  )

  renderReviewCard()
  editReviewsForm.reset()

  localStorage.setItem("reviews", JSON.stringify(userReviews));

  // Close edit form and restore form for new reviews
  reviewsFormSection.classList.remove('inactive-review-form')

  editFormSection.style.display = 'none'
})




// Handle Delete

modal.addEventListener('click', event => {

  if (event.target.textContent === 'Cancel') {
    modal.classList.remove('show-modal')
  }


  if (event.target.textContent === 'Delete') {
    userReviews = userReviews.filter(userReview => currId !== userReview.id)

    renderReviewCard()

    localStorage.setItem("reviews", JSON.stringify(userReviews));

    modal.classList.remove('show-modal')

    console.log(`review ${currId} successfuly deleted`)
  }

  console.log(userReviews)

})



// Cancel Button for editing reviews

cancelEditButton.addEventListener('click', () => {
  if (editFormSection.style.display === 'block') {
    reviewsFormSection.classList.remove('inactive-review-form')
    editReviewsForm.reset()

    editFormSection.style.display = 'none'
  }
})






// Conditionally Display Empty Reviews Text


const emptyReviewTextDiv = document.createElement('div')
reviewCardList.appendChild(emptyReviewTextDiv)
emptyReviewTextDiv.id = 'empty-reviews'
// emptyReviewTextDiv.style.display = 'none'
emptyReviewTextDiv.style.marginLeft = 'auto'
emptyReviewTextDiv.style.marginRight = 'auto'



const emptyReviewText = document.createElement('p')
emptyReviewTextDiv.appendChild(emptyReviewText)
emptyReviewText.textContent = "There are no reviews yet. Maybe you could be the first?"



let isEmptyReviews = reviewCardList.innerText.trim() === ''

if (isEmptyReviews) {
  emptyReviewTextDiv.style.display = 'block'
} else {
  emptyReviewTextDiv.style.display = 'none'
}
