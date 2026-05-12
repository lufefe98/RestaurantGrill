// Hide/Reveal Review Form

const reviewBtn = document.querySelector(".review-btn")
const form = document.getElementById("reviewsForm")

const reviewsOptionBtn = document.querySelector(".review-options-btn")
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
  const reviewsOptionDropdown = card.querySelector(".review-options-dropdown")


  // Outputs: Visible dropdown options
  reviewOptionsBtn.addEventListener('click', (event) => {

    // Toggle active class for dropdowns
    reviewsOptionDropdown.classList.toggle('active-dropdown')

    // Monitor active and non-active cards

    if (reviewOptionsBtn.matches(':focus') && !reviewOptionsBtn.nextElementSibling.classList.contains('active')) {
      console.log("This button is currently active/focused.");
    } 
    // if (!reviewOptionsBtn.matches(':focus') && !reviewOptionsBtn.nextElementSibling.classList.contains('active')) {
    //   console.log("This button is not active/focused.");
    // }

    
    // if (document.activeElement !== reviewOptionsBtn && reviewOptionsBtn.nextElementSibling.classList.contains('active')) {
    //   reviewsOptionDropdown.classList.remove('active')
    // }
  })








  // Edge cases: 
  // All the other dropdown menus could be
  // activated. - sorted
  // The dropdown menu has to go away if I click
  // the button that opened it. - sorted
  // Only one dropdown can be active at a time.
  // The dropdown menu has to go away if I click
  // anywhere else.


});






// Hide/Display Edit Review Form




