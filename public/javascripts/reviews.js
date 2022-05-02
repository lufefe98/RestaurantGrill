// Attempt 1

const moreBtn = document.querySelector('#showmore');

let currentIndex = 5;

moreBtn.addEventListener('click', () => {
  const reviews = [...document.querySelectorAll('.customerReview:nth-of-type(n+6)')];

  for (let i = currentIndex; i < currentIndex; i++) {
    if (reviews) {
      reviews.classList.add('showReview');      
    }
  }


  currentIndex += 5;
  
  // If you display all the elements then hide the show more button
  if (currentIndex >= reviews.length) {
    event.target.style.display = 'none';
  }
  
})


// ATTEMPT #2

// create a function to implement the feature
// function showMoreLess() {

//   const moreBtn = document.querySelector('#showmore');
//   const reviews = document.querySelectorAll('.customerReviews:nth-of-type(n+6)');

//   if(reviews.style.display === 'none') {
//     reviews.style.display = "block";
//   }
// }

// const moreBtn = document.querySelector('#showmore');
// const reviews = document.getElementsByClassName('.customerReviews');

// moreBtn.addEventListener('click', () => {

//   reviews.classList.add("textBold");
// })