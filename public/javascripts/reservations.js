// Initialize Email.js

emailjs.init({
    publicKey: "XOEebu3ouD0ep7us2",
})


// Select elements

const southBeachRadio = document.getElementById('southBeachRadio')
const umhlangaRadio = document.getElementById('umhlangaRadio')
const locRadios = [southBeachRadio, umhlangaRadio]

const southBeachImg = document.getElementById('southBeachResImg')
const umhlangaImg = document.getElementById('umhlangaResImg')
const locationImgs = document.getElementsByClassName('res-loc-img')

const reservationForm = document.getElementById('reservations-form')
const userName = document.getElementById('name')
const date = document.getElementById('date')
const time = document.getElementById('time')
const email = document.getElementById('email')
const locations = document.getElementsByClassName('locationRadios')



// Reservation Location Selection

southBeachRadio.addEventListener('change', () => {
    if (southBeachRadio.checked) {
        southBeachImg.classList.remove('uncheckedRadio')
        umhlangaImg.classList.add('uncheckedRadio')
    }
})

umhlangaRadio.addEventListener('change', () => {
    if (umhlangaRadio.checked) {
        umhlangaImg.classList.remove('uncheckedRadio')
        southBeachImg.classList.add('uncheckedRadio')
    }
})




// Form Submission & Mailing Feature

reservationForm.addEventListener('submit', event => {
    event.preventDefault()

    let params = {
        name: userName.value,
        email: email.value,
        date: date.value,
        time: time.value,
        location: Array.from(locations).find(location => location.checked)?.value || 'undefined'
    }

    console.log('EmailJS available:', typeof emailjs);

    emailjs.send("service_bemkinq",
        "template_uavqdhg",
        params)
        .then(() => { alert('Booking Confirmed!!!') })
        .catch(error => { console.error('EmailJS error:', error); });


    reservationForm.reset()

    let radioImgs = [umhlangaImg, southBeachImg]
    for (let i = 0; i < radioImgs.length; i++) {
        radioImgs[i].classList.remove('uncheckedRadio')
    }
})



// Preselect Location if Clicked from Locations Page


document.addEventListener('DOMContentLoaded', () => {
    const locationParams = new URLSearchParams(window.location.search)

    const locationValue = locationParams.get('location')



    locRadios.find(locRadio => locRadio.value === locationValue ? locRadio.checked = true : locRadio.checked = false)


    if (southBeachRadio.checked) {
        southBeachImg.classList.remove('uncheckedRadio')
        umhlangaImg.classList.add('uncheckedRadio')
    }

    if (umhlangaRadio.checked) {
        umhlangaImg.classList.remove('uncheckedRadio')
        southBeachImg.classList.add('uncheckedRadio')
    }

})
