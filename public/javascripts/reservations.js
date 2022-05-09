// Grey out the unchecked radio
// ATTEMPT #1

// const sbR = document.getElementById('southBeachRadio');
// const umR = document.getElementById('umhlangaRadio');

// const um = document.getElementById('umhlangaRes');
// const sb = document.getElementById('southBeachRes');


// function grayRadio() {
//     const sbR = document.getElementById('southBeachRadio');
//     const umR = document.getElementById('umhlangaRadio');

//     const um = document.getElementById('umhlangaResImg');
//     const sb = document.getElementById('southBeachResImg');

//     if (sbR.checked = true) {
//         um.style.filter = 'grayscale(80%)';

//     } else if (umR.checked = true) {
//         sb.style.filter = 'grayscale(80%)';
//     }
// }

// ATTEMPT #2

// const sbR = document.getElementById('southBeachRadio');
// const umR = document.getElementById('umhlangaRadio');

const um = document.getElementById('umhlangaResImg');
const sb = document.getElementById('southBeachResImg');

// for(let i = 0; i <= 1; i++){
//     if (sbR.checked = true) {
//         um.style.filter = 'grayscale(70%)';
//     } else if (umR.checked = true) {
//         sb.style.filter = 'grayscale(70%)';
//     }
// }

// ATTEMPT #3

// const greyRadio1 = sbR.checked = true ? sb.style.filter = 'grayscale(70%)' : sb.style.filter = 'grayscale(0%)';
// const greyRadio2 = umR.checked = true ? um.style.filter = 'grayscale(70%)' : um.style.filter = 'grayscale(0%)';

// ATTEMPT #4

document.getElementById('umhlangaResImg').forEach(item1 => {
    item1.addEventListener('click', () => {
        sb.classList.toggle('uncheckedRadio')
    })
  })

//   document.querySelectorAll('.res-loc-img').forEach(item2 => {
//     item2.addEventListener('click', () => {
//         item2.classList.toggle('uncheckedRadio')
//     })
//   })
