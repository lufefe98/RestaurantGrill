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
const reviewsSection = document.getElementsByClassName("customerReviews")




reviewForm.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(reviewName.value)
  console.log(reviewEmail.value)
  console.log(reviewDate.value)
  console.log(reviewRating.value)
  console.log(reviewText.value)



  // Create card elements

  const reviewCard = document.createElement('div')
  reviewCard.classList.add('review-card')

  // comment details
  const reviewCardDetails = document.createElement('div')
  reviewCardDetails.classList.add('review-details')

  const reviewCardName = document.createElement('span')
  reviewCardName.classList.add('review-name')
  reviewCardName.innerText = `${reviewName.value}`

  const reviewCardDate = document.createElement('span')
  reviewCardDate.classList.add('review-date')
  reviewCardDate.innerText = `${reviewDate.value}`
  // comment details

  const reviewCardText = document.createElement('p')
  reviewCardText.classList.add('review-text')
  reviewCardText.innerText = `${reviewText.value}`



  // Append card elements

  reviewsSection[0].append(reviewCard)

  reviewCard.append(reviewCardDetails, reviewCardText)

  reviewCardDetails.append(reviewCardName, ' | ', reviewCardDate)

  // reviewsSection[0].appendChild(reviewCardText)




  // console.log(reviewsSection)


})






// Review Card Slider/Carousel

