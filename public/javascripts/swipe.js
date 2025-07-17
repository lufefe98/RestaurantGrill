const swiper = new Swiper('.swiper', {

  loop: true,
  grabCursor: true,
  spaceBetween: 50,

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

// Event Listener

reviewForm.addEventListener('submit', (e) => {
  e.preventDefault()

  // input fields

  const reviewName = document.getElementById("name")
  // const reviewEmail = document.getElementById("email")
  const reviewDate = document.getElementById("date")
  const reviewRatings = document.querySelectorAll(".star")
  const reviewText = document.getElementById("review")
  // const cardList = document.getElementsByClassName("card-list")



  // create card

  const reviewCard = document.createElement('div')
  reviewCard.classList.add('review-card', 'swiper-slide')

  const reviewCardDetails = document.createElement('div')
  reviewCardDetails.classList.add('review-details')

  const reviewCardName = document.createElement('span')
  reviewCardName.classList.add('review-name')
  reviewCardName.textContent = `${reviewName.value.trim()}`

  const separator = document.createTextNode(' | ');

  const reviewCardDate = document.createElement('span')
  reviewCardDate.classList.add('review-date')
  reviewCardDate.textContent = `${reviewDate.value.trim()}`

  const reviewCardText = document.createElement('p')
  reviewCardText.classList.add('review-text')
  reviewCardText.textContent = `${reviewText.value.trim()}`



  // append elements

  reviewCard.append(reviewCardDetails, reviewCardText)

  reviewCardDetails.append(reviewCardName, separator, reviewCardDate)

    reviewRatings.forEach((reviewRating) => {
    if (reviewRating.checked) {
      // console.log(reviewRating.value)
      const reviewCardReview = document.createElement('p')
      reviewCardReview.classList.add('review-rating')
      reviewCardReview.textContent = `Rating: ${reviewRating.value.trim()}/5`
      reviewCard.append(reviewCardReview)
    }
  })

  // append to swiper

  swiper.appendSlide(reviewCard)


  // reset form

  reviewForm.reset()

})



