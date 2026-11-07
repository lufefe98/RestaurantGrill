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



// Set Date & Time Form Validations

// dates

const today = new Date();

const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0')
const dd = String(today.getDate()).padStart(2, '0')

const minDate = `${yyyy}-${mm}-${dd}`


const nextYear = today.getFullYear() + 1


const maxDate = `${nextYear}-${mm}-${dd}`


// set min and max dates
date.min = minDate
date.value = minDate

date.max = maxDate



// time

const now = new Date()

const currTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })

time.min = "09:00";
time.max = "20:00";


// Set minimum booking time
let bookingTime = now
bookingTime.setHours(bookingTime.getHours() + 1)

let minBookingTime = bookingTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })


// You can only book 1 hour from now
if (date.value === minDate) {
    time.min = minBookingTime
    time.value = minBookingTime
} 






// If it is after 7pm, min date is set to tomorrow
document.addEventListener('DOMContentLoaded', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1)

    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, '0')
    const tmrDay = String(tomorrow.getDate()).padStart(2, '0');

    const tomorrowDate = `${year}-${month}-${tmrDay}`

    if (Number(currTime.slice(0, 2)) >= 19) {
        // Make min date tomorrow, at 9AM
        date.min = tomorrowDate
        date.value = tomorrowDate
        time.min = "09:00"
        time.value = "09:00"
        minBookingTime = "09:00"
    }


    // Reset booking times for later dates

    if (date.value !== minDate) {
        time.min = "09:00"
        time.value = "09:00"
        time.max = "20:00"
    }
})



// If the time is moved to a time outside min or max 
// time, alert the user and set the time to the closest
// time (ie: min or max time)
time.addEventListener('change', () => {

    // If the user clears the input, do nothing
    if (!time.value) return;

    // Restrict if the time is earlier than min
    if (time.min && time.value < time.min) {
        alert(`Please select a time after ${time.min}`);
        time.value = time.min;
    }
    // Restrict if the time is later than max
    else if (time.max && time.value > time.max) {
        alert(`Please select a time before ${time.max}`);
        time.value = time.max;
    }
});


reservationForm.addEventListener('submit', (event) => {

    // If the user clears the input, do nothing
    if (!time.value) return;

    // Restrict if the time is earlier than min
    if (time.min && time.value < time.min) {
        event.preventDefault()
        alert(`Please select a time after ${time.min}`);
        time.value = time.min;
    }
    // Restrict if the time is later than max
    else if (time.max && time.value > time.max) {
        event.preventDefault()
        alert(`Please select a time before ${time.max}`);
        time.value = time.max;
    }
})


// If the date is set to a later date than today, set the
// time to 9AM.
// Otherwise, if time goes back to today, then reset to the
// usual booking time an hour from the current time
date.addEventListener('change', () => {
    if (date.value > minDate) {
        time.min = '09:00'
        time.value = '09:00'
    } else if (date.value === minDate && time.value < currTime) {
        time.min = minBookingTime
        time.value = minBookingTime
    }
})


// If the time is earlier than 9AM, set the time value to 9AM
if (currTime < '09:00') {
    time.min = '09:00'
    time.value = '09:00'
}





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
