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





// Form Submission

const reviewName = document.getElementById("name")
const reviewEmail = document.getElementById("email")
const reviewDate = document.getElementById("date")
const reviewRating = document.querySelector(".star")
const reviewText = document.getElementById("review")
const cardList = document.getElementsByClassName("card-list")



// Event Listener

reviewForm.addEventListener('submit', (e) => {
  e.preventDefault()

  // Create card elements

  const reviewCard = document.createElement('div')
  reviewCard.classList.add('review-card', 'swiper-slide')

  // Create comment details
  const reviewCardDetails = document.createElement('div')
  reviewCardDetails.classList.add('review-details')

  const reviewCardName = document.createElement('span')
  reviewCardName.classList.add('review-name')
  reviewCardName.innerText = `${reviewName.value}`

  const reviewCardDate = document.createElement('span')
  reviewCardDate.classList.add('review-date')
  reviewCardDate.innerText = `${reviewDate.value}`
  // Create comment details

  const reviewCardText = document.createElement('p')
  reviewCardText.classList.add('review-text')
  reviewCardText.innerText = `${reviewText.value}`



  // Append card elements

  cardList[0].append(reviewCard)

  reviewCard.append(reviewCardDetails, reviewCardText)

  reviewCardDetails.append(reviewCardName, ' | ', reviewCardDate)

})


// Moving the creation of the card gives us the swiper.js
// attributes and desired styling, but now, it requires
// the text and other elements to be added to it.