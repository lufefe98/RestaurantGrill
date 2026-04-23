// Hide/Reveal Review Form

const reviewBtn = document.querySelector(".review-btn")
const form = document.getElementById("reviewsForm")

const reviewsOptionBtn = document.querySelectorAll(".review-options-btn")
const reviewsOptionDropdown = document.querySelectorAll(".review-options-dropdown")
const editFormSection = document.getElementById("edit-reviews-container")
const reviewCard = document.querySelectorAll(".review-card")


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

// Loop through the review cards, get click feature on all
// buttons, get it to open the options for that review card
// and make those buttons clickable too (ie: edit & delete)

reviewCard.forEach(card => {
  // Inputs: card, button, list of (hidden) dropdown options
  const reviewOptionsBtn = card.querySelector('.review-options-btn')
  const reviewDropdownItem = card.querySelectorAll('.review-dropdown-item')


  // Outputs: Visible dropdown options
  reviewOptionsBtn.addEventListener('click', () => {
    for (let i = 0; i < reviewDropdownItem.length; i++) {
      if (reviewDropdownItem[i].style.display === '') {
        reviewDropdownItem[i].style.display = 'flex'
        console.log(`${reviewDropdownItem[i].style.display}`)
      } else if (reviewDropdownItem[i].style.display === 'flex'){
        reviewDropdownItem[i].style.display = 'none'
        console.log(`${reviewDropdownItem[i].style.display}`)
      } else {
        reviewDropdownItem[i].style.display = 'flex'
        console.log(`${reviewDropdownItem[i].style.display}`)
      }
    }
  })
  // Edge cases: All the other dropdown menus could be
  // activated, the dropdown menu has to go away if I click
  // anywhere else, only one dropdown can be active at a time.


});






// Hide/Display Edit Review Form




// Ignore this:

// const nkinobho = document.querySelectorAll(".review-options-btn")
// nkinobho[0].addEventListener('click', () => {
//     const reviewOptions = document.querySelectorAll('.review-dropdown-item')

//     for (let i = 0; i < reviewOptions.length; i++) {
//      reviewOptions[i].style.display = 'flex'
//     }
// })