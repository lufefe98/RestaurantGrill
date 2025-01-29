// Show more reviews after the first 5 reviews

const moreBtn = document.querySelector('#showmore');

let currentIndex = 5;
let countOfReviewsToShow = 5;

moreBtn.addEventListener('click', () => {
  const reviews = document.querySelectorAll('.customerReviews');
  const hiddenReviews = [];

//   Create a list of hiddenReviews
  for(let i = 0; i < reviews.length; i++) {
    if(reviews[i].style.display === 'none') {
      hiddenReviews.push(reviews[i]);
    }
  }

//   Toggle the display of 5 hidden reviews
  for (let i = 0; i < Math.min(hiddenReviews.length, countOfReviewsToShow); i++) {
      hiddenReviews[i].style.display = 'block';
  }

  currentIndex += 5;
  
//   If you display all the elements then hide the show more button
  if (currentIndex >= reviews.length) {
    moreBtn.style.display = 'none';
  }
})


// Hide all reviews after the 5th review
document.querySelectorAll('.customerReviews:nth-of-type(n+6)').forEach(item => {
  item.style.display = 'none';
})
