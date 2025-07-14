// Select elements

const southBeachRadio = document.getElementById('southBeachRadio')
const umhlangaRadio = document.getElementById('umhlangaRadio')

const southBeachImg = document.getElementById('southBeachResImg')
const umhlangaImg = document.getElementById('umhlangaResImg')


const locationImgs = document.getElementsByClassName('res-loc-img')


// if statements

southBeachRadio.addEventListener('change', () => {
    if(southBeachRadio.checked) {
        southBeachImg.classList.remove('uncheckedRadio')
        umhlangaImg.classList.add('uncheckedRadio')
    }
    console.log('South Beach radio has been checked')
})

umhlangaRadio.addEventListener('change', () => {
    if(umhlangaRadio.checked) {
        umhlangaImg.classList.remove('uncheckedRadio')
        southBeachImg.classList.add('uncheckedRadio')
    }
        console.log('Umhlanga radio has been checked')
})