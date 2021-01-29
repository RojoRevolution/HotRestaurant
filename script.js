// ===========================
// On Page Button Variables
// Need ID names
const viewBtn = document.getElementById('#');
const reserveBtn = document.getElementById('#');
const homeBtn = document.getElementById('#');
const submitBtn = document.getElementById('#');
// Reservation Variables
const reserveName = document.getElementById('reserve-name');
const reservePhone = document.getElementById('reserve-phone');
const reserveEmail = document.getElementById('reserve-email');
const reserveId = document.getElementById('reserve-unique-id');


// ===========================

// Will likely need to  use fetch: this is placeholder code for now
// fetch(`NEED ROUTE`, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })
//     .then((response) => response.json());
//     .then((data) => {
//         console.log(data);
//         // Deconstruct Item
//         // Add If Else Logic if needed?
//     })


// ===========================
// Event Listeners
viewBtn.addEventListener('click', () => {
    // remove console log once click is confirmed
    console.log('click')
})

reserveBtn.addEventListener('click', () => {
    // remove console log once click is confirmed
    console.log('click')
})

homeBtn.addEventListener('click', () => {
    // remove console log once click is confirmed
    console.log('click')
})

submitBtn.addEventListener('click', (event) => {
    // Button is part of a form so we prevent default?
    event.preventDefault();
    // remove console log once click is confirmed
    console.log('click')


})