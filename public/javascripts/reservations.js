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

function getCurrentTime() {
    const now = new Date()

    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
}



time.min = "09:00";
time.max = "20:00";


// Set minimum booking time

function getBookingTime() {
    const bookingTime = new Date()
    bookingTime.setHours(bookingTime.getHours() + 1)

    return bookingTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
}





// Default Time & Date States

document.addEventListener('DOMContentLoaded', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1)

    if (date.value === minDate) {
        time.value = getBookingTime()
    }


    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, '0')
    const tmrDay = String(tomorrow.getDate()).padStart(2, '0');

    const tomorrowDate = `${year}-${month}-${tmrDay}`

    // If it is 7pm or later, min date is set to tomorrow

    const currTime = getCurrentTime()

    if (Number(currTime.slice(0, 2)) >= 19) {
        // Make min date tomorrow, at 9AM
        date.min = tomorrowDate
        date.value = tomorrowDate
        time.min = "09:00"
        time.value = "09:00"
        // Will removing the below affect the minBookingTime?
        // minBookingTime = "09:00"
    }


    // If the time is earlier than 9AM, set the time value to 9AM
    if (currTime < '09:00') {
        time.min = '09:00'
        time.value = '09:00'
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

    const minBookingTime = getBookingTime()

    // If the user clears the input, do nothing
    if (!time.value) return;

    // Restrict if the time is earlier than min
    if (time.min && time.value < minBookingTime) {
        alert(`Please select a time after ${minBookingTime}`);
        time.value = minBookingTime
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

    const minBookingTime = getBookingTime()

    time.min = minBookingTime


    // Restrict if the time is earlier than min
    if (time.value < minBookingTime) {
        event.preventDefault()
        alert(`Please select a time after ${minBookingTime}`);
        time.value = minBookingTime;
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

    // If date is changed to day after today, the time
    // should be 9AM.

    if (date.value > minDate) {
        time.min = '09:00'
        time.value = '09:00'
    } else if (date.value === minDate) {

        // If user sets time back to currnet day, then 
        // regular booking time of one hour later should
        // be the value of the time.
        
        const minBookingTime = getBookingTime()
        time.min = minBookingTime


        if (time.value < minBookingTime) {
            time.value = minBookingTime
        }
    }

    // Reset booking time to 9AM if it is after 7PM 
    const currTime = getCurrentTime()

    if (currTime >= "19:00") {
        minBookingTime = "09:00"
    }
})






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
